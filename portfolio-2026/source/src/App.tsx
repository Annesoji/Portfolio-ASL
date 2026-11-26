import { useCallback, useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import ChatMessage from './components/ChatMessage';
import CVPage, { downloadCV } from './components/CVPage';
import DesignSystem from './components/DesignSystem';
import PromptInput from './components/PromptInput';
import PrototypeViewer from './components/PrototypeViewer';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import WelcomeScreen from './components/WelcomeScreen';
import { COVENANT_PROTOTYPE, flowStrings } from './data/covenantFlow';
import { dsStrings } from './data/designSystem';
import { ui } from './data/i18n';
import { getIntent } from './data/knowledgeBase';
import { contact, projects } from './data/profile';
import { useChat } from './hooks/useChat';
import { useLang } from './hooks/useLang';
import { useTheme } from './hooks/useTheme';
import type { ActionId, ModelId } from './types';

/** Documents qui s'ouvrent dans un onglet, à côté de la conversation. */
type DocId = 'cv' | 'ds';
type View = 'chat' | DocId;

/** La page Design System a sa propre adresse, pour pouvoir être partagée. */
const DS_HASH = '#design-system';
const startsOnDs = () => window.location.hash === DS_HASH;

export default function App() {
  const [lang, setLang] = useLang();
  const [theme, setTheme] = useTheme();
  const [model, setModel] = useState<ModelId>('standard');
  const [docs, setDocs] = useState<DocId[]>(() => (startsOnDs() ? ['ds'] : []));
  const [view, setView] = useState<View>(() => (startsOnDs() ? 'ds' : 'chat'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [prototype, setPrototype] = useState<'covenant' | null>(null);

  const t = ui[lang];
  const chat = useChat(lang, model);
  const scroller = useRef<HTMLDivElement>(null);
  const stick = useRef(true);

  // Auto-scroll tant que l'utilisateur reste en bas de la conversation
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    if (chat.messages.length === 0) el.scrollTop = 0;
    else if (stick.current) el.scrollTop = el.scrollHeight;
  }, [chat.messages, chat.stream]);

  // L'adresse suit l'onglet Design System
  useEffect(() => {
    const url = view === 'ds' ? DS_HASH : window.location.pathname + window.location.search;
    window.history.replaceState(null, '', url);
  }, [view]);

  const onScroll = () => {
    const el = scroller.current;
    if (el) stick.current = el.scrollHeight - el.scrollTop - el.clientHeight < 120;
  };

  const openDoc = useCallback((id: DocId) => {
    setDrawerOpen(false);
    setDocs((d) => (d.includes(id) ? d : [...d, id]));
    setView(id);
  }, []);
  const closeDoc = useCallback((id: DocId) => {
    setDocs((d) => d.filter((x) => x !== id));
    setView((v) => (v === id ? 'chat' : v));
  }, []);
  const openCV = useCallback(() => openDoc('cv'), [openDoc]);
  const openDesignSystem = useCallback(() => openDoc('ds'), [openDoc]);
  const openPrototype = useCallback((id: 'covenant') => setPrototype(id), []);
  const closePrototype = useCallback(() => setPrototype(null), []);

  /** Écrire à Anne-Sophie ouvre directement la messagerie de la personne. */
  const openEmail = () => {
    setDrawerOpen(false);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(t.emailSubject)}`;
  };

  const newChat = () => {
    chat.reset();
    setView('chat');
    setActiveProject(null);
    setDrawerOpen(false);
  };

  const openProject = (id: string) => {
    const project = projects.find((p) => p.id === id);
    if (!project) return;
    setView('chat');
    chat.reset();
    // Une étude de cas se lit depuis le haut : pas de défilement automatique
    stick.current = !getIntent(project.intentId).flow;
    setActiveProject(id);
    setDrawerOpen(false);
    chat.askIntent(project.intentId);
  };

  const send = (text: string) => {
    stick.current = true;
    // Une commande répond dans la conversation, comme une question : la réponse propose ensuite d'ouvrir le CV, l'email ou le Design System
    chat.askText(text);
  };

  const askIntent = (id: string) => {
    setView('chat');
    stick.current = true;
    chat.askIntent(id);
  };

  const onAction = (a: ActionId) => (a === 'cv' ? openCV() : openEmail());

  const first = chat.messages[0];
  const sessionTitle = activeProject
    ? projects.find((p) => p.id === activeProject)!.title[lang]
    : first?.role === 'user'
      ? (first.text ?? getIntent(first.questionOf ?? '').question[lang])
      : t.newSession;

  const docLabel: Record<DocId, string> = { cv: t.cv.tab, ds: dsStrings[lang].title };

  return (
    <div className="relative flex h-dvh overflow-hidden bg-bg text-ink">
      <Sidebar
        t={t}
        lang={lang}
        theme={theme}
        open={drawerOpen}
        collapsed={collapsed}
        activeProject={view === 'chat' ? activeProject : null}
        onClose={() => setDrawerOpen(false)}
        onNew={newChat}
        onProject={openProject}
        onDesignSystem={openDesignSystem}
        designSystemActive={view === 'ds'}
        onCV={openCV}
        onEmail={openEmail}
        setLang={setLang}
        setTheme={setTheme}
      />

      <main className="relative z-10 flex min-w-0 flex-1 flex-col">
        <TopBar
          t={t}
          title={sessionTitle}
          model={model}
          setModel={setModel}
          onMenu={() => setDrawerOpen(true)}
          onToggleSidebar={() => setCollapsed((c) => !c)}
          chatActive={view === 'chat'}
          onSelectChat={() => setView('chat')}
          docTabs={docs.map((id) => ({
            id,
            label: docLabel[id],
            active: view === id,
            closeLabel: `${t.close} — ${docLabel[id]}`,
            onSelect: () => setView(id),
            onClose: () => closeDoc(id),
          }))}
          docAction={
            view === 'cv' ? (
              <button onClick={downloadCV} className="btn-primary !px-4 !py-2" title={t.cv.downloadHint}>
                <span className="hidden sm:inline">{t.cv.download}</span>
                <span className="sm:hidden">PDF</span>
                <Download size={16} aria-hidden />
              </button>
            ) : undefined
          }
        />

        {view === 'ds' ? (
          <DesignSystem lang={lang} t={t} />
        ) : (
          <div ref={scroller} onScroll={onScroll} className="relative z-10 min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
            {view === 'cv' ? (
              <CVPage t={t} lang={lang} />
            ) : chat.messages.length === 0 ? (
              <WelcomeScreen lang={lang} t={t} onPick={askIntent} />
            ) : (
              <div role="log" className="mx-auto w-full max-w-3xl space-y-7 px-4 py-8 sm:px-6">
                {chat.messages.map((m, i) => (
                  <ChatMessage
                    key={m.id}
                    message={m}
                    lang={lang}
                    t={t}
                    streamCount={chat.stream?.id === m.id ? chat.stream.count : null}
                    isLast={i === chat.messages.length - 1}
                    onAction={onAction}
                    onFollowUp={askIntent}
                    onOpenPrototype={openPrototype}
                    onOpenDesignSystem={openDesignSystem}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {view === 'chat' && <PromptInput t={t} isStreaming={chat.isStreaming} onSend={send} onStop={chat.stop} />}
      </main>

      {prototype && (
        <PrototypeViewer
          src={COVENANT_PROTOTYPE}
          title={flowStrings[lang].viewerTitle}
          note={flowStrings[lang].viewerNote}
          restartLabel={flowStrings[lang].restart}
          desktopHint={flowStrings[lang].desktopHint}
          closeLabel={t.close}
          onClose={closePrototype}
        />
      )}
    </div>
  );
}
