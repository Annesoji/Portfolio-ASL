/**
 * Le skill réel du Design System de ce portfolio, écrit et testé par Anne-Sophie.
 * Les fichiers sont importés tels quels depuis `.claude/skills/asl-design-system/` :
 * ce que le portfolio affiche est exactement ce que l'agent lit.
 */
import skill from '../../.claude/skills/asl-design-system/SKILL.md?raw';
import composants from '../../.claude/skills/asl-design-system/references/composants.md?raw';
import fondations from '../../.claude/skills/asl-design-system/references/fondations.md?raw';
import styles from '../../.claude/skills/asl-design-system/references/styles.md?raw';
import check from '../../.claude/skills/asl-design-system/scripts/check.mjs?raw';

export interface SkillFile {
  path: string;
  content: string;
}

export const SKILL_FOLDER = 'asl-design-system/';

export const skillFiles: SkillFile[] = [
  { path: 'SKILL.md', content: skill },
  { path: 'references/fondations.md', content: fondations },
  { path: 'references/styles.md', content: styles },
  { path: 'references/composants.md', content: composants },
  { path: 'scripts/check.mjs', content: check },
];
