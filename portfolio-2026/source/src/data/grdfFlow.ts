import type { Localized } from '../types';
import type { FlowBoardData } from './covenantFlow';

/**
 * Parcours du lecteur sur la plateforme GRDF, avant et après la refonte.
 * « Avant » reprend la carte d'expérience réalisée par Anne-Sophie sur l'ancienne plateforme Act4Gaz
 * (persona Julien, étapes, verbatims). « Après » décrit ce que montrent ses maquettes.
 */
const l = (fr: string, en: string): Localized => ({ fr, en });

export const grdfBoard: FlowBoardData = {
  eyebrow: l('Parcours du lecteur · avant / après', 'Reader journey · before / after'),
  title: l('Trouver et lire un contenu sur la décarbonation', 'Finding and reading content about decarbonisation'),
  actors: {
    fr: { human: 'Lecteur', system: 'Plateforme' },
    en: { human: 'Reader', system: 'Platform' },
  },
  defaultView: 'before',
  journeys: [
    {
      id: 'before',
      muted: true,
      label: l('Avant', 'Before'),
      stages: [
        {
          step: 1,
          title: l('Se connecter', 'Signing in'),
          frictions: [l('Trop de défilement', 'Too much scrolling'), l('Contenu pas adapté au mobile', 'Content not adapted to mobile')],
          nodes: [{ actor: 'human', label: l('Se connecte et personnalise son profil', 'Signs in and personalises their profile') }],
        },
        {
          step: 2,
          title: l('Découvrir', 'Discovering'),
          frictions: [l('Contenu mal hiérarchisé', 'Poorly ranked content'), l('Audio, vidéo et lecture mélangés', 'Audio, video and reading mixed together')],
          nodes: [{ actor: 'human', label: l('Explore la page d’accueil', 'Explores the home page') }],
        },
        {
          step: 3,
          title: l('Filtrer', 'Filtering'),
          nodes: [{ actor: 'human', label: l('Affine avec les filtres région et thématique', 'Narrows down with the region and topic filters') }],
        },
        {
          step: 4,
          title: l('Rechercher', 'Searching'),
          frictions: [l('Liens qui ne fonctionnent pas', 'Broken links'), l('Page trop chargée, on ne sait plus où l’on est', 'Overloaded page, hard to know where you are')],
          nodes: [
            { actor: 'human', label: l('Parcourt les résultats', 'Browses the results') },
            { actor: 'human', label: l('Choisit un article', 'Picks an article') },
          ],
        },
        {
          step: 5,
          title: l('Consulter', 'Reading'),
          frictions: [l('Impossible de partager l’article', 'No way to share the article'), l('Aucune autre lecture proposée', 'No other reading suggested')],
          nodes: [{ actor: 'human', label: l('Lit un article sur les énergies renouvelables', 'Reads an article about renewable energy') }],
        },
      ],
    },
    {
      id: 'after',
      label: l('Après', 'After'),
      stages: [
        {
          step: 1,
          title: l('À la une', 'Front page'),
          nodes: [
            { actor: 'system', label: l('Présente une sélection de contenus, un à la fois', 'Presents a selection of content, one at a time') },
            { actor: 'human', label: l('Lit, passe ou revient en arrière', 'Reads, skips or goes back') },
          ],
        },
        {
          step: 2,
          title: l('Les contenus', 'Content'),
          nodes: [
            { actor: 'human', label: l('Choisit une thématique', 'Chooses a topic') },
            { actor: 'human', label: l('Filtre par format : à lire, à écouter, à voir', 'Filters by format: to read, to listen, to watch') },
          ],
        },
        {
          step: 3,
          title: l('Rechercher', 'Searching'),
          nodes: [{ actor: 'human', label: l('Cherche un contenu depuis l’en-tête, sur toutes les pages', 'Searches for content from the header, on every page') }],
        },
        {
          step: 4,
          title: l('Consulter', 'Reading'),
          nodes: [
            { actor: 'system', label: l('Affiche la thématique et le format de chaque article', 'Shows the topic and format of each article') },
            { actor: 'human', label: l('Lit, puis partage l’article', 'Reads, then shares the article') },
          ],
        },
      ],
    },
  ],
};

const FIGMA_FILE = 'bRCddnUzlotCFXHBfThuI1/Portfolio-file';
const FIGMA_QUERY = 'node-id=7-43622&page-id=2%3A1791&starting-point-node-id=50%3A122678';

/**
 * Prototype Figma, intégré dans la page en version mobile, sans l'interface de Figma autour.
 * Il ne s'affiche que si le fichier Figma est partagé en lecture publique.
 */
export const GRDF_PROTOTYPE = `https://embed.figma.com/proto/${FIGMA_FILE}?${FIGMA_QUERY}&scaling=scale-down-width&content-scaling=fixed&embed-host=portfolio-asl&footer=false&viewport-controls=false&device-frame=false`;

/** Le même prototype, ouvert dans Figma dans un nouvel onglet. */
export const GRDF_PROTOTYPE_LINK = `https://www.figma.com/proto/${FIGMA_FILE}?${FIGMA_QUERY}&scaling=scale-down&content-scaling=fixed`;

export const GRDF_SITE = 'https://justdecarb.grdf.fr/';

export const grdfStrings: Localized<{
  protoEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  open: string;
  site: string;
  openFigma: string;
  viewerTitle: string;
}> = {
  fr: {
    protoEyebrow: 'Prototype · version mobile',
    ctaTitle: 'Essayez la plateforme',
    ctaText: 'Le prototype est navigable ici : touchez les boutons comme sur un téléphone. La plateforme a été conçue mobile first, c’est donc cette version que vous voyez. Le chargement peut prendre quelques secondes.',
    open: 'Voir le prototype',
    site: 'Voir le site en ligne',
    openFigma: 'Ouvrir dans Figma',
    viewerTitle: 'GRDF — prototype mobile',
  },
  en: {
    protoEyebrow: 'Prototype · mobile version',
    ctaTitle: 'Try the platform',
    ctaText: 'The prototype is navigable here: tap the buttons as you would on a phone. The platform was designed mobile first, so this is the version you see. Loading can take a few seconds.',
    open: 'View the prototype',
    site: 'View the live site',
    openFigma: 'Open in Figma',
    viewerTitle: 'GRDF — mobile prototype',
  },
};
