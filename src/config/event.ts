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
  time: "15:00",
  isoDateTime: "2026-11-14T15:00:00-03:00",
  address:
    process.env.NEXT_PUBLIC_EVENT_ADDRESS ??
    "Rua das Flores, 123 - Jardim das Árvores, Brasília - DF",
  googleMapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
    "https://maps.google.com/?q=Rua+das+Flores+123",
  wazeUrl:
    process.env.NEXT_PUBLIC_WAZE_URL ??
    "https://waze.com/ul?q=Rua%20das%20Flores%20123",
  invitationMessage: "Você está convidado para o nosso chá de bebê!",
  thankYouMessage: "Sua presença faz toda a diferença!",
  thankYouSubMessage:
    "Que o Benjamin cresça cercado de amor, carinho e muitas aventuras!",
  maxCompanions: 5,
} as const;
