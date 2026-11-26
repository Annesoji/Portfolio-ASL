import type { Localized } from '../types';

const FIGMA_FILE = 'Lz1R1WzSOZS9votvKTaiTS/Master';
const FIGMA_QUERY = 'node-id=1192-8054&page-id=603%3A528&starting-point-node-id=1192%3A8054';

/** Prototype mobile Vitaliz, intégré sans l'habillage de Figma. */
export const VITALIZE_PROTOTYPE = `https://embed.figma.com/proto/${FIGMA_FILE}?${FIGMA_QUERY}&scaling=scale-down-width&content-scaling=fixed&embed-host=portfolio-asl&footer=false&viewport-controls=false&device-frame=false`;

/** Le même prototype, ouvert dans Figma dans un nouvel onglet. */
export const VITALIZE_PROTOTYPE_LINK = `https://www.figma.com/proto/${FIGMA_FILE}?${FIGMA_QUERY}&scaling=scale-down&content-scaling=fixed`;

export const vitalizeStrings: Localized<{
  protoEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  openFigma: string;
  viewerTitle: string;
  problem: string;
  answer: string;
  persona: string;
  map: string;
  brand: string;
  shop: string;
}> = {
  fr: {
    protoEyebrow: 'Prototype · application mobile',
    ctaTitle: 'Essayez l’application',
    ctaText: 'Le prototype est navigable ici : touchez les boutons comme sur un téléphone. Le chargement peut prendre quelques secondes.',
    openFigma: 'Ouvrir dans Figma',
    viewerTitle: 'Vitaliz — prototype mobile',
    problem: 'Problème',
    answer: 'Réponse',
    persona: 'Le persona du cœur de cible : Théodore, ses motivations, ses freins, ses habitudes d’achat',
    map: 'Carte d’expérience de Théodore : pensées, actions, points de friction, émotions, opportunités',
    brand: 'La charte graphique : logo, zones de protection, couleurs, interdits, typographie',
    shop: 'Support promotionnel : la marque en vitrine',
  },
  en: {
    protoEyebrow: 'Prototype · mobile app',
    ctaTitle: 'Try the app',
    ctaText: 'The prototype is navigable here: tap the buttons as you would on a phone. Loading can take a few seconds.',
    openFigma: 'Open in Figma',
    viewerTitle: 'Vitaliz — mobile prototype',
    problem: 'Problem',
    answer: 'Answer',
    persona: 'The core-target persona: Théodore, his motivations, barriers and buying habits',
    map: 'Théodore’s experience map: thoughts, actions, pain points, emotions, opportunities',
    brand: 'The brand guidelines: logo, clear space, colours, don’ts, typography',
    shop: 'Promotional material: the brand in a shop window',
  },
};

/** Une décision de conception : le problème de la cible, la réponse, et les écrans qui la montrent. */
export interface Decision {
  problem: Localized;
  answer: Localized;
  screens: { file: string; caption: Localized }[];
}

const l = (fr: string, en: string): Localized => ({ fr, en });

export const vitalizDecisions: Decision[] = [
  {
    problem: l(
      'Sport, sommeil, alimentation, santé : chacun arrive avec un objectif différent. Un suivi identique pour tous ne parle à personne.',
      'Sport, sleep, nutrition, health: everyone arrives with a different goal. The same tracking for all speaks to no one.',
    ),
    answer: l(
      'Dès l’ouverture, on choisit un programme du catalogue ou l’on compose le sien, catégorie par catégorie. Le profil ajuste ensuite les repères.',
      'From the first screen, you pick a programme from the catalogue or build your own, category by category. The profile then adjusts the targets.',
    ),
    screens: [
      { file: 'ecran-choix', caption: l('Choisir ou créer son programme', 'Pick or create a programme') },
      { file: 'ecran-categories', caption: l('Quatre catégories à régler', 'Four categories to set') },
      { file: 'ecran-profil', caption: l('Le profil et le mode de vie', 'Profile and lifestyle') },
    ],
  },
  {
    problem: l(
      'Le cœur de cible veut des données poussées et fiables. Mais un écran saturé de chiffres décourage au lieu d’aider.',
      'The core target wants detailed, reliable data. But a screen crammed with figures discourages instead of helping.',
    ),
    answer: l(
      'L’accueil n’affiche que les informations favorites : chacun en choisit jusqu’à six, parmi le sommeil, la santé et l’alimentation. Le détail reste à un geste.',
      'The home screen only shows favourite information: each person picks up to six, across sleep, health and nutrition. Detail stays one tap away.',
    ),
    screens: [
      { file: 'ecran-accueil', caption: l('L’accueil et ses informations favorites', 'Home and its favourite information') },
      { file: 'ecran-favoris', caption: l('Le choix des informations, jusqu’à six', 'Choosing the information, up to six') },
      { file: 'ecran-sommeil', caption: l('Le détail, ici le sommeil', 'The detail, here sleep') },
    ],
  },
  {
    problem: l(
      'Le risque d’un bracelet connecté : porté quelques semaines, puis oublié. Suivre ses chiffres ne suffit pas à revenir.',
      'The risk with a connected wristband: worn for a few weeks, then forgotten. Tracking figures is not enough to come back.',
    ),
    answer: l(
      'Le programme avance jour après jour, et l’application propose des challenges chaque semaine. Un classement entre amis donne une raison de revenir : pour les autres autant que pour soi.',
      'The programme moves forward day by day, and the app suggests challenges every week. A ranking among friends gives a reason to come back: for the others as much as for yourself.',
    ),
    screens: [{ file: 'ecran-classement', caption: l('Les challenges de la semaine et le classement entre amis', 'The weekly challenges and the ranking among friends') }],
  },
];
