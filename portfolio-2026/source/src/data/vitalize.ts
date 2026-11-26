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
    persona: 'The core-target persona: Théodore, his motivations, barriers and buying habits',
    map: 'Théodore’s experience map: thoughts, actions, pain points, emotions, opportunities',
    brand: 'The brand guidelines: logo, clear space, colours, don’ts, typography',
    shop: 'Promotional material: the brand in a shop window',
  },
};
