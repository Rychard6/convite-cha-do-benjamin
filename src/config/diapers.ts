export type DiaperSuggestion = {
  id: string;
  brand: string;
  name: string;
  size: string;
  quantity?: string;
  price?: string;
  store?: string;
  url: string;
  image: string;
  promotion?: boolean;
};

/**
 * Lista configurável de sugestões de fraldas.
 * Alterar produto/tamanho/preço/imagem/loja/link aqui, sem tocar na UI.
 */
export const diaperSuggestions: DiaperSuggestion[] = [
  {
    id: "pampers-premium-care-m",
    brand: "Pampers",
    name: "Fralda Pampers Premium Care",
    size: "Tamanho M",
    quantity: "52 unidades",
    price: "R$ 69,90",
    store: "Amazon",
    url: "https://www.amazon.com.br/",
    image: "/assets/illustrations/objects/balloon.png",
    promotion: true,
  },
  {
    id: "pampers-confier-sec-m",
    brand: "Pampers",
    name: "Fralda Pampers Confort Sec",
    size: "Tamanho M",
    quantity: "48 unidades",
    price: "R$ 59,90",
    store: "Ver na Amazon",
    url: "https://www.amazon.com.br/",
    image: "/assets/illustrations/objects/moon.png",
    promotion: false,
  },
  {
    id: "huggies-supreme-care-m",
    brand: "Huggies",
    name: "Fralda Huggies Supreme Care",
    size: "Tamanho M",
    quantity: "50 unidades",
    price: "R$ 64,90",
    store: "Ver na Amazon",
    url: "https://www.amazon.com.br/",
    image: "/assets/illustrations/objects/bow.png",
    promotion: false,
  },
];
