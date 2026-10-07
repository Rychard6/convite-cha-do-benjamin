export type DiaperSuggestion = {
  id: string;
  brand: string;
  name: string;
  image: string;
};

export const diaperSuggestions: DiaperSuggestion[] = [
  {
    id: "pampers-premium-care",
    brand: "Pampers",
    name: "Fralda Pampers Premium Care",
    image: "fraldas/pampersPC.png",
  },
  {
    id: "pampers-comfort-sec",
    brand: "Pampers",
    name: "Fralda Pampers Comfort Sec",
    image: "fraldas/pampersCS.png",
  },
  {
    id: "huggies-supreme-care",
    brand: "Huggies",
    name: "Fralda Huggies Supreme Care",
    image: "fraldas/huggies.png",
  },
  {
    id: "mamypoko",
    brand: "MammyPoko",
    name: "Fralda MammyPoko",
    image: "fraldas/mammyPoko.png",
  },
];
