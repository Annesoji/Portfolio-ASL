import { useState } from 'react';
import { ArrowDownToLine, ChevronDown, Folder, FolderOpen, Linkedin, Mail, Moon, Phone, Plus, Sun, X } from 'lucide-react';
import type { UIStrings } from '../data/i18n';
import { contact, projects } from '../data/profile';
import type { Lang, Theme } from '../types';
import Monogram from './Monogram';

interface Props {
  t: UIStrings;
  lang: Lang;
  theme: Theme;
  /** Drawer mobile ouvert */
  open: boolean;
  /** Sidebar repliée sur desktop */
  collapsed: boolean;
  activeProject: string | null;
  onClose: () => void;
  onNew: () => void;
  onProject: (id: string) => void;
  onDesignSystem: () => void;
  /** L'onglet Design System est affiché */
  designSystemActive: boolean;
  onCV: () => void;
  onEmail: () => void;
  setLang: (l: Lang) => void;
  setTheme: (t: Theme) => void;
}

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: React.ReactNode; aria: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-1 rounded-full border border-line p-0.5">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          aria-label={o.aria}
          className={`t-all flex flex-1 items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold ${
            value === o.value ? 'bg-ink text-bg' : 'text-muted hover:text-ink'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-muted">
      <span className="shrink-0">{children}</span>
      <span className="h-px flex-1 bg-line" aria-hidden />
    </p>
  );
}

export default function Sidebar(p: Props) {
  const { t, lang } = p;
  const [folderOpen, setFolderOpen] = useState(false);
  // Le dossier s'ouvre de lui-même quand son projet est affiché
  const showFolder = folderOpen || p.designSystemActive;
  const FolderIcon = showFolder ? FolderOpen : Folder;
  return (
    <>
      {/* Overlay mobile */}
      <div
        onClick={p.onClose}
        aria-hidden
        className={`t-all fixed inset-0 z-30 bg-[var(--overlay)] md:hidden ${p.open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <aside
        aria-label="Navigation"
        className={`t-all fixed inset-y-0 left-0 z-40 flex w-[304px] max-w-[88vw] shrink-0 flex-col border-r border-line bg-sidebar md:relative md:z-10 md:max-w-none ${
          p.open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 ${p.collapsed ? 'md:-ml-[304px]' : 'md:ml-0'}`}
      >
        {/* Header */}
        <div className="px-5 pb-4 pt-5">
          <div className="flex items-center gap-3">
            <Monogram size={46} />
            <div className="min-w-0 flex-1">
              <p className="truncate font-display text-[17px] font-semibold leading-tight tracking-[-0.02em] text-ink">{contact.name}</p>
              <p className="tag mt-1 !inline-block max-w-full truncate bg-olive-tint text-olive-text">
                {t.role}
              </p>
            </div>
            <button onClick={p.onClose} aria-label={t.closeMenu} className="icon-btn md:hidden">
              <X size={18} aria-hidden />
            </button>
          </div>
          <button
            onClick={p.onNew}
            className="btn-secondary mt-5 w-full !justify-between !py-2 !pl-4 !pr-2"
          >
            {t.newChat}
            <span className="icon-chip bg-olive text-olive-fg">
              <Plus size={14} strokeWidth={2.5} aria-hidden />
            </span>
          </button>
        </div>

        {/* Études de cas */}
        <nav className="min-h-0 flex-1 overflow-y-auto px-5 pb-3">
          <SectionLabel>{t.caseStudies}</SectionLabel>
          <ul className="-mx-2 mt-2">
            {projects.map((pr, i) => {
              const active = p.activeProject === pr.id;
              return (
                <li key={pr.id}>
                  <button
                    onClick={() => p.onProject(pr.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`t-all group flex w-full items-baseline gap-3 rounded-2xl px-2 py-2.5 text-left ${
                      active ? 'bg-surface-2' : 'hover:bg-surface-2'
                    }`}
                  >
                    <span
                      className={`t-all w-6 shrink-0 font-display text-[13px] font-medium italic leading-none ${
                        active ? 'text-vermillion' : 'text-accent-text'
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-[13.5px] leading-snug text-ink ${active ? 'font-semibold' : 'font-normal'}`}>
                        {pr.title[lang]}
                      </span>
                      <span className="mt-1 block text-[11px] font-normal text-muted">
                        {pr.tag[lang]}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Projets personnels : un dossier repliable, fermé par défaut pour alléger le menu */}
          <div className="mt-3">
            <button
              onClick={() => setFolderOpen((o) => !o)}
              aria-expanded={showFolder}
              aria-controls="personal-projects"
              className="t-all -mx-2 flex w-[calc(100%+1rem)] items-center gap-2.5 rounded-2xl px-2 py-2 text-left hover:bg-surface-2"
            >
              <FolderIcon size={15} className="shrink-0 text-accent-text" aria-hidden />
              <span className="min-w-0 flex-1 truncate text-[13.5px] font-medium text-ink">{t.personalProjects}</span>
              <span className="text-[11px] font-normal text-muted">1</span>
              <ChevronDown size={15} className={`t-all shrink-0 text-muted ${showFolder ? 'rotate-180' : ''}`} aria-hidden />
            </button>
            {showFolder && (
              <ul id="personal-projects" className="-mx-2 mt-1 pl-3">
                <li>
                  <button
                    onClick={p.onDesignSystem}
                    aria-current={p.designSystemActive ? 'page' : undefined}
                    className={`t-all group flex w-full items-baseline gap-3 rounded-2xl px-2 py-2.5 text-left ${
                      p.designSystemActive ? 'bg-surface-2' : 'hover:bg-surface-2'
                    }`}
                  >
                    <span
                      className={`t-all w-6 shrink-0 font-display text-[13px] font-medium italic leading-none ${
                        p.designSystemActive ? 'text-vermillion' : 'text-accent-text'
                      }`}
                    >
                      01
                    </span>
                    <span className="min-w-0">
                      <span className={`block text-[13.5px] leading-snug text-ink ${p.designSystemActive ? 'font-semibold' : 'font-normal'}`}>
                        {t.dsProject.title}
                      </span>
                      <span className="mt-1 block text-[11px] font-normal text-muted">{t.dsProject.tag}</span>
                    </span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Accès rapide & contact */}
        <div className="px-5 pb-5">
          <SectionLabel>{t.quickAccess}</SectionLabel>
          <div className="mt-3 space-y-2">
            <button onClick={p.onEmail} className="btn-primary w-full !justify-between !py-2 !pl-4 !pr-2">
              {t.contactEmail}
              <span className="icon-chip bg-olive-fg text-olive">
                <Mail size={13} strokeWidth={2.25} aria-hidden />
              </span>
            </button>
            <button onClick={p.onCV} className="btn-secondary w-full !justify-between !py-2 !pl-4 !pr-2">
              {t.viewCV}
              <span className="icon-chip bg-accent text-accent-fg">
                <ArrowDownToLine size={14} strokeWidth={2.25} aria-hidden />
              </span>
            </button>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            <a
              href={contact.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="t-all inline-flex items-center gap-1.5 hover:text-ink"
            >
              <Linkedin size={13} className="text-accent-text" aria-hidden /> LinkedIn
            </a>
            <a href={contact.phoneHref} className="t-all inline-flex items-center gap-1.5 hover:text-ink">
              <Phone size={13} className="text-accent-text" aria-hidden /> {contact.phone}
            </a>
          </div>

          {/* Contrôles */}
          <div className="mt-4 flex gap-2">
            <Segmented
              label={t.language}
              value={lang}
              onChange={p.setLang}
              options={[
                { value: 'fr', label: 'FR', aria: 'Français' },
                { value: 'en', label: 'EN', aria: 'English' },
              ]}
            />
            <Segmented
              label={t.theme}
              value={p.theme}
              onChange={p.setTheme}
              options={[
                { value: 'light', label: <>{t.light} <Sun size={12} className="text-vermillion" aria-hidden /></>, aria: t.light },
                { value: 'dark', label: <>{t.dark} <Moon size={12} className="text-vermillion" aria-hidden /></>, aria: t.dark },
              ]}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
