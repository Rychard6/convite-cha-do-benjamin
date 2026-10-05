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
  address:
    process.env.NEXT_PUBLIC_EVENT_ADDRESS ??
    "EQNP 25/30, Módulo Especial “D” — ao lado da Prefeitura do P.Sul",
  googleMapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
    "https://www.google.com/maps/place/15%C2%B050'40.1%22S+48%C2%B007'11.2%22W/@-15.8444691,-48.122364,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-15.8444691!4d-48.1197891?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D",
  wazeUrl:
    process.env.NEXT_PUBLIC_WAZE_URL ??
    "https://waze.com/ul?ll=-15.8444691%2C-48.1197891&navigate=yes",
  invitationMessage: "Você está convidado para o nosso chá de bebê!",
  thankYouMessage: "Sua presença faz toda a diferença!",
  thankYouSubMessage:
    "Que o Benjamin cresça cercado de amor, carinho e muitas aventuras!",
  maxCompanions: 5,
} as const;
