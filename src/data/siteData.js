export const trustLogos = ['Azuria Hotels', 'NovaStay', 'Orion Suites', 'Belair Group', 'Helio Resorts']

export const capabilities = [
  'Agent vocal IA en temps réel',
  'Vérification des disponibilités',
  'Estimation tarifaire et upsell',
  'Confirmation + SMS automatique',
  'Tableau de bord live KPI',
  'Intégrations PMS/CRM',
]

export const kpis = [
  { label: 'Conversion appels', value: 34, prefix: '+', suffix: '%' },
  { label: 'Temps de traitement', value: 48, prefix: '-', suffix: '%' },
  { label: 'Disponibilité', value: 24, suffix: '/7' },
  { label: 'Progression NPS', value: 21, prefix: '+', suffix: ' pts' },
]

export const segments = {
  independants: {
    title: 'Hôtels indépendants',
    challenges: ['Réception sous tension', 'Manque de suivi des appels', 'Réservations perdues hors horaires'],
    workflow: 'GuestFlow répond, qualifie, vérifie l inventaire et confirme en moins de 90 secondes.',
    impact: 'Plus de réservations directes, moins de charge opérationnelle et meilleure expérience client.',
  },
  groupes: {
    title: 'Groupes hôteliers',
    challenges: ['Processus hétérogènes', 'Qualité variable selon site', 'Reporting consolidé limité'],
    workflow: 'Un agent standardisé multi-site avec règles de marque, handoff humain et pilotage centralisé.',
    impact: 'Uniformisation de la performance et gains de marge mesurables à l échelle réseau.',
  },
  residences: {
    title: 'Résidences / appart-hôtels',
    challenges: ['Séjours longs complexes', 'Questions tarifaires récurrentes', 'Canaux entrants fragmentés'],
    workflow: 'Qualification avancée des séjours, réponses politiques, relance SMS et relai équipe vente.',
    impact: 'Cycle de décision accéléré et meilleure exploitation des demandes à forte valeur.',
  },
}

export const caseStudies = [
  {
    tag: 'Conversion',
    title: 'Un hôtel urbain passe de 18% à 29% de conversion téléphonique',
    context: 'Pic d appels le soir, équipe réduite en réception.',
    result: '+61% de réservations traitées sans intervention humaine.',
  },
  {
    tag: 'Expérience client',
    title: 'Un resort premium réduit les délais de réponse à moins de 20 secondes',
    context: 'Forte attente sur la qualité relationnelle avant réservation.',
    result: 'CSAT +17 points en 6 semaines.',
  },
  {
    tag: 'Productivité équipe',
    title: 'Une résidence absorbe 2x plus d appels sans recruter',
    context: 'Saison haute avec demandes répétitives.',
    result: '-42% de charge réception sur les tâches à faible valeur.',
  },
  {
    tag: 'Conversion',
    title: 'Un groupe business augmente les ventes directes corporate',
    context: 'Opportunités perdues faute de qualification rapide.',
    result: '+24% de leads qualifiés transmis aux sales managers.',
  },
  {
    tag: 'Expérience client',
    title: 'Une chaîne lifestyle homogénéise sa promesse d accueil',
    context: 'Variabilité entre établissements.',
    result: 'Temps d attente perçu divisé par 3.',
  },
  {
    tag: 'Productivité équipe',
    title: 'Un éco-hôtel automatise les confirmations et suivis SMS',
    context: 'Multiples confirmations manuelles quotidiennes.',
    result: '11 heures économisées par semaine.',
  },
]
