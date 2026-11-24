import { useCallback, useEffect, useRef, useState } from 'react';
import { getAnswerText } from '../data/knowledgeBase';
import { matchIntent, splitWords } from '../lib/matcher';
import type { Lang, Message, ModelId } from '../types';

const THINKING_MS = 450;
const TICK_MS = 30;
const WORDS_PER_TICK = 2;

export interface StreamState {
  id: string;
  /** Nombre de mots déjà affichés (0 = phase de « réflexion ») */
  count: number;
}

/**
 * État de la conversation + streaming mot-par-mot.
 * Les messages ne stockent que des références d'intention : le texte est
 * résolu au rendu, ce qui permet de traduire instantanément toute la conversation.
 */
export function useChat(lang: Lang, model: ModelId) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stream, setStream] = useState<StreamState | null>(null);
  const timer = useRef<number>();
  const seq = useRef(0);
  const langRef = useRef(lang);
  langRef.current = lang;

  const clearTimer = () => {
    window.clearTimeout(timer.current);
    window.clearInterval(timer.current);
  };

  useEffect(() => clearTimer, []);

  const respond = useCallback(
    (user: { text?: string; questionOf?: string }, intentId: string) => {
      clearTimer();
      const uid = `m${++seq.current}`;
      const aid = `m${++seq.current}`;
      setMessages((prev) => [
        ...prev,
        { id: uid, role: 'user', ...user },
        { id: aid, role: 'assistant', intentId, model },
      ]);
      setStream({ id: aid, count: 0 });
      timer.current = window.setTimeout(() => {
        timer.current = window.setInterval(() => {
          setStream((s) => {
            if (!s || s.id !== aid) return s;
            const total = splitWords(getAnswerText(intentId, langRef.current, model)).length;
            const next = s.count + WORDS_PER_TICK;
            if (next >= total) {
              clearTimer();
              return null;
            }
            return { id: aid, count: next };
          });
        }, TICK_MS);
      }, THINKING_MS);
    },
    [model],
  );

  /** Question libre : passe par le moteur de correspondance. Renvoie l'intention trouvée. */
  const askText = useCallback(
    (text: string) => {
      const intentId = matchIntent(text);
      respond({ text }, intentId);
      return intentId;
    },
    [respond],
  );

  /** Question prédéfinie (prompt suggéré, étude de cas, relance). */
  const askIntent = useCallback((intentId: string) => respond({ questionOf: intentId }, intentId), [respond]);

  const stop = useCallback(() => {
    clearTimer();
    setStream((s) => {
      if (s) {
        setMessages((prev) =>
          prev.map((m) => (m.id === s.id && m.role === 'assistant' ? { ...m, stoppedAt: s.count } : m)),
        );
      }
      return null;
    });
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    setStream(null);
    setMessages([]);
  }, []);

  return { messages, stream, isStreaming: stream !== null, askText, askIntent, stop, reset };
}
