import type { EventType, FAQItem, StaffMember, Testimonial } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aïcha Ngo Bell",
    role: { fr: "Habituée depuis 2021", en: "Regular since 2021" },
    quote: {
      fr: "Le ndolé le plus proche de celui de ma grand-mère que j'ai mangé en dehors de la maison. Le service est chaleureux et l'ambiance est parfaite pour les repas en famille.",
      en: "The closest ndolé to my grandmother's I've had outside the house. The service is warm and the vibe is perfect for family meals.",
    },
    rating: 5,
    avatarInitials: "AN",
  },
  {
    id: "t2",
    name: "Marc-Aurèle Fotso",
    role: { fr: "Client d'affaires régulier", en: "Regular business guest" },
    quote: {
      fr: "Notre lieu de prédilection pour recevoir des clients internationaux : cadre élégant, plats impeccables et un vrai sens de l'accueil.",
      en: "Our go-to place to host international clients: elegant setting, flawless dishes and genuine hospitality.",
    },
    rating: 5,
    avatarInitials: "MF",
  },
  {
    id: "t3",
    name: "Solange Ebogo",
    role: { fr: "Organisatrice d'événements", en: "Event planner" },
    quote: {
      fr: "Nous avons organisé le mariage de ma sœur ici. L'équipe a géré chaque détail avec professionnalisme, et les invités parlent encore du poisson braisé !",
      en: "We hosted my sister's wedding here. The team handled every detail professionally, and guests are still talking about the braised fish!",
    },
    rating: 5,
    avatarInitials: "SE",
  },
  {
    id: "t4",
    name: "Jean-Pierre Mbarga",
    role: { fr: "Client depuis l'ouverture", en: "Guest since opening" },
    quote: {
      fr: "Une valeur sûre à Ange Raphaël. J'y retourne chaque semaine pour le poulet DG, toujours aussi savoureux.",
      en: "A safe bet in Ange Raphaël. I come back every week for the poulet DG — always just as delicious.",
    },
    rating: 4,
    avatarInitials: "JM",
  },
];

export const STAFF: StaffMember[] = [
  {
    id: "s1",
    name: "Chef Armand Douala",
    role: { fr: "Chef Exécutif", en: "Executive Chef" },
    bio: {
      fr: "Formé dans les cuisines de Yaoundé et Douala, le Chef Armand porte une exigence de précision au service des saveurs traditionnelles, avec quinze ans d'expérience en cuisine camerounaise.",
      en: "Trained in the kitchens of Yaoundé and Douala, Chef Armand brings precision and discipline to traditional flavors, with fifteen years of experience in Cameroonian cuisine.",
    },
    image: "chef-armand",
  },
  {
    id: "s2",
    name: "Chef Bella Njoya",
    role: { fr: "Sous-Chef Pâtisserie", en: "Pastry Sous-Chef" },
    bio: {
      fr: "Spécialiste des desserts revisités, Bella marie fruits locaux et techniques modernes pour clore chaque repas en beauté.",
      en: "A specialist in reimagined desserts, Bella pairs local fruit with modern technique to close every meal beautifully.",
    },
    image: "chef-bella",
  },
  {
    id: "s3",
    name: "Rita Manga",
    role: { fr: "Responsable de Salle", en: "Front of House Manager" },
    bio: {
      fr: "Rita veille à ce que chaque convive se sente chez lui, du premier accueil jusqu'au dernier café.",
      en: "Rita makes sure every guest feels at home, from the first welcome to the last coffee.",
    },
    image: "manager-rita",
  },
];

export const EVENTS: EventType[] = [
  {
    id: "e1",
    slug: "mariages",
    title: { fr: "Mariages", en: "Weddings" },
    description: {
      fr: "Un cadre élégant et une équipe dédiée pour sublimer le plus beau jour de votre vie, du cocktail à la réception.",
      en: "An elegant setting and a dedicated team to elevate the most beautiful day of your life, from cocktail hour to reception.",
    },
    image: "event-mariage",
    features: [
      { fr: "Menu personnalisé", en: "Custom menu" },
      { fr: "Décoration sur demande", en: "Decoration on request" },
      { fr: "Espace privatisable", en: "Private space available" },
    ],
    minGuests: 30,
    maxGuests: 200,
  },
  {
    id: "e2",
    slug: "anniversaires",
    title: { fr: "Anniversaires", en: "Birthdays" },
    description: {
      fr: "Fêtez vos moments précieux entourés de vos proches, avec un service attentionné et des plats à partager.",
      en: "Celebrate your precious moments surrounded by loved ones, with attentive service and dishes made to share.",
    },
    image: "event-anniversaire",
    features: [
      { fr: "Gâteau sur commande", en: "Cake on request" },
      { fr: "Animation musicale", en: "Music entertainment" },
      { fr: "Formules groupe", en: "Group packages" },
    ],
    minGuests: 10,
    maxGuests: 80,
  },
  {
    id: "e3",
    slug: "evenements-corporate",
    title: { fr: "Événements d'Entreprise", en: "Corporate Events" },
    description: {
      fr: "Séminaires, déjeuners d'affaires et cocktails de fin d'année dans un cadre professionnel et raffiné.",
      en: "Seminars, business lunches and year-end cocktails in a professional, refined setting.",
    },
    image: "event-corporate",
    features: [
      { fr: "Équipement audiovisuel", en: "AV equipment" },
      { fr: "Facturation entreprise", en: "Corporate invoicing" },
      { fr: "Menus adaptés", en: "Tailored menus" },
    ],
    minGuests: 15,
    maxGuests: 120,
  },
  {
    id: "e4",
    slug: "diners-prives",
    title: { fr: "Dîners Privés", en: "Private Dining" },
    description: {
      fr: "Un salon privatif pour vos dîners intimes, réunions de famille ou occasions spéciales.",
      en: "A private room for intimate dinners, family gatherings or special occasions.",
    },
    image: "event-prive",
    features: [
      { fr: "Salon fermé", en: "Enclosed room" },
      { fr: "Menu dégustation", en: "Tasting menu" },
      { fr: "Service dédié", en: "Dedicated service" },
    ],
    minGuests: 6,
    maxGuests: 24,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: { fr: "Faut-il réserver à l'avance ?", en: "Do I need to book in advance?" },
    answer: {
      fr: "Nous recommandons de réserver au moins 24h à l'avance, surtout le week-end. Vous pouvez réserver en ligne ou par WhatsApp.",
      en: "We recommend booking at least 24 hours ahead, especially on weekends. You can book online or via WhatsApp.",
    },
  },
  {
    question: { fr: "Proposez-vous des plats végétariens ?", en: "Do you offer vegetarian dishes?" },
    answer: {
      fr: "Oui, plusieurs plats de notre carte sont végétariens et clairement identifiés par un badge dédié.",
      en: "Yes, several dishes on our menu are vegetarian and clearly marked with a dedicated badge.",
    },
  },
  {
    question: { fr: "Livrez-vous à domicile ?", en: "Do you offer home delivery?" },
    answer: {
      fr: "Nous proposons la vente à emporter et la commande via WhatsApp. La livraison est disponible dans certains quartiers de Douala.",
      en: "We offer takeaway and WhatsApp ordering. Delivery is available in select neighborhoods of Douala.",
    },
  },
  {
    question: { fr: "Peut-on privatiser l'espace pour un événement ?", en: "Can I privatize the space for an event?" },
    answer: {
      fr: "Absolument. Consultez notre page Événements ou contactez-nous directement pour discuter de votre projet.",
      en: "Absolutely. Check our Events page or contact us directly to discuss your project.",
    },
  },
];
