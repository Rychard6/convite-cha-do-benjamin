/**
 * Configuração central do evento "Chá do Benjamin".
 * Toda a aplicação deve ler as informações do evento a partir deste arquivo,
 * evitando valores hardcoded espalhados pelos componentes.
 */
export const eventConfig = {
  babyName: "Benjamin",
  title: "Chá do Benjamin",
  subtitle: "Nosso pequeno grande aventureiro",
  date: "14 de novembro de 2026",
  time: "16:00",
  isoDateTime: "2026-11-14T16:00:00-03:00",
  address: "EQNP 25/30, Módulo Especial 'D' - Ao lado da Prefeitura do P. Sul",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=-15.8443552%2C-48.1199297",
  wazeUrl: "https://waze.com/ul?ll=-15.8443552%2C-48.1199297&navigate=yes",
  invitationMessage: "Você está convidado para o nosso chá de bebê!",
  thankYouMessage: "Sua presença faz toda a diferença!",
  thankYouSubMessage:
    "Que o Benjamin cresça cercado de amor, carinho e muitas aventuras!",
  maxCompanions: 5,
} as const;
