import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { RotateCcw, X } from 'lucide-react';

interface Props {
  /** Chemin relatif à /public */
  src: string;
  title: string;
  note: string;
  restartLabel: string;
  closeLabel: string;
  desktopHint: string;
  onClose: () => void;
}

/** Largeur pour laquelle le prototype a été conçu. */
const DESIGN_WIDTH = 1280;

/**
 * Visionneuse plein écran : le prototype reste navigable dans une iframe,
 * sans quitter le portfolio. Sur petit écran, il est réduit pour tenir en largeur.
 */
export default function PrototypeViewer({ src, title, note, restartLabel, closeLabel, desktopHint, onClose }: Props) {
  const stage = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: DESIGN_WIDTH, h: 800 });
  const [run, setRun] = useState(0);

  useLayoutEffect(() => {
    const el = stage.current;
    if (!el) return;
    const measure = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [onClose]);

  const scale = Math.min(1, box.w / DESIGN_WIDTH);
  const scaled = scale < 1;

  return createPortal(
    <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-50 flex flex-col bg-bg">
      <div className="flex shrink-0 items-center gap-3 border-b border-line px-4 py-2.5">
        <div className="min-w-0 flex-1">
          <p className="eyebrow truncate font-semibold text-ink">{title}</p>
          <p className="mt-0.5 truncate text-xs font-light text-muted">{scaled ? desktopHint : note}</p>
        </div>
        <button onClick={() => setRun((r) => r + 1)} className="btn-secondary !px-3.5 !py-2" title={restartLabel}>
          <span className="hidden sm:inline">{restartLabel}</span> <RotateCcw size={14} aria-hidden />
        </button>
        <button onClick={onClose} aria-label={closeLabel} autoFocus className="icon-btn">
          <X size={18} aria-hidden />
        </button>
      </div>
      {/* ds-ignore: le prototype est toujours clair, son support reste blanc dans les deux thèmes */}
      <div ref={stage} className="relative min-h-0 flex-1 overflow-hidden bg-white">
        <iframe
          key={run}
          src={`${import.meta.env.BASE_URL}${src}`}
          title={title}
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: scaled ? DESIGN_WIDTH : '100%',
            height: scaled ? box.h / scale : '100%',
            transform: scaled ? `scale(${scale})` : undefined,
          }}
        />
      </div>
    </div>,
    document.body,
  );
}
