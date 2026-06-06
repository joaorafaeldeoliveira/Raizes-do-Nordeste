import { Product } from "@/src/types/product";

export const products: Product[] = [
  // BREAKFAST

  {
    id: 1,
    category: "breakfast",
    name: "Cuscuz tradicional",
    image: "/assets/products/cuz-cuz-tradicional.jpg",
    price: 29,
    bestSeller: true,
    cityAvailability: [
      "cascavel",
      "recife",
    ],
  },

  {
    id: 2,
    category: "breakfast",
    name: "Cuscuz recheado",
    image: "/assets/products/cuz-cuz-recheado.png",
    price: 32,
    bestSeller: true,
    cityAvailability: [
    "londrina",
      "cascavel",
      "recife",
    ],
  },

  {
    id: 3,
    category: "breakfast",
    name: "Tapioca",
    image: "/assets/products/tapioca-gourmet.jpg",
    price: 29,
    bestSeller: true,
    cityAvailability: [
      "londrina",
      "cascavel",
      "guarulhos",
      "recife",
    ],
  },

  {
    id: 4,
    category: "breakfast",
    name: "Pão na chapa",
    image: "/assets/products/pao-chapa.jpg",
    price: 9,
    bestSeller: false,
    cityAvailability: [
      "londrina",
      "cascavel",
      "guarulhos",
    ],
  },

  // REGIONAL

  {
    id: 5,
    category: "regional",
    name: "Bolo de macaxeira",
    image: "/assets/products/bolo-macaxeira.jpg",
    price: 12,
    bestSeller: false,
    cityAvailability: [
      "recife",
      "londrina",
    ],
  },

  {
    id: 6,
    category: "regional",
    name: "Bolo de milho",
    image: "/assets/products/bolo-milho.jpg",
    price: 12,
    bestSeller: false,
    cityAvailability: [
      "londrina",
      "cascavel",
      "guarulhos",
      "recife",
    ],
  },

  {
    id: 7,
    category: "regional",
    name: "Baião de dois",
    image: "/assets/products/baiao-dois.jpg",
    price: 16,
    bestSeller: true,
    cityAvailability: [
      "recife",
      "londrina",
    ],
  },

  {
    id: 8,
    category: "regional",
    name: "Carne de sol",
    image: "/assets/products/carne-sol.jpg",
    price: 28,
    bestSeller: true,
    cityAvailability: [
      "recife",
    ],
  },

  // FAST

  {
    id: 9,
    category: "fast",
    name: "Crepioca",
    image: "/assets/products/crepioca.png",
    price: 28,
    bestSeller: false,
    cityAvailability: [
      "londrina",
      "cascavel",
      "recife",
    ],
  },

  {
    id: 10,
    category: "fast",
    name: "Sanduíches nordestinos",
    image: "/assets/products/sanduiche.jpg",
    price: 28,
    bestSeller: false,
    cityAvailability: [
      "londrina",
      "guarulhos",
    ],
  },

  {
    id: 11,
    category: "fast",
    name: "Misto quente",
    image: "/assets/products/pao-chapa.jpg",
    price: 18,
    bestSeller: false,
    cityAvailability: [
      "londrina",
      "cascavel",
      "guarulhos",
      "recife",
    ],
  },

  // DRINKS

  {
    id: 12,
    category: "drinks",
    name: "Suco de Caju",
    image: "/assets/products/suco-de-caju.jpg",
    price: 12,
    bestSeller: true,
    cityAvailability: [
      "recife",
      "londrina",
      "cascavel",
    ],
  },

  {
    id: 13,
    category: "drinks",
    name: "Suco de Acerola",
    image: "/assets/products/suco-de-acerola.jpg",
    price: 12,
    bestSeller: false,
    cityAvailability: [
      "londrina",
      "recife",
    ],
  },

  {
    id: 14,
    category: "drinks",
    name: "Suco de Graviola",
    image: "/assets/products/suco-de-graviola.jpg",
    price: 12,
    bestSeller: false,
    cityAvailability: [
      "londrina",
      "recife",
    ],
  },

  {
    id: 15,
    category: "drinks",
    name: "Café gelado",
    image: "/assets/products/cafe-gelado.jpg",
    price: 24,
    bestSeller: false,
    cityAvailability: [
      "maringa",
      "cascavel",
      "guarulhos",
    ],
  },

  {
    id: 16,
    category: "drinks",
    name: "Coca-Cola",
    image: "/assets/products/coca-cola.png",
    price: 9,
    bestSeller: false,
    cityAvailability: [
      "maringa",
      "cascavel",
      "guarulhos",
      "recife",
    ],
  },

  {
    id: 17,
    category: "drinks",
    name: "Guaraná",
    image: "/assets/products/Guarana.jpg",
    price: 9,
    bestSeller: false,
    cityAvailability: [
      "maringa",
      "cascavel",
      "guarulhos",
      "recife",
    ],
  },

  // SEASONAL

  {
    id: 18,
    category: "seasonal",
    name: "Canjica",
    image: "/assets/products/canjica.jpg",
    price: 12,
    bestSeller: false,
    cityAvailability: [
      "recife",
      "guarulhos",
    ],
  },

  {
    id: 19,
    category: "seasonal",
    name: "Pamonha",
    image: "/assets/products/pamonha.jpg",
    price: 12,
    bestSeller: true,
    cityAvailability: [
      "guarulhos",
      "cascavel",
      "recife",
    ],
  },

  {
    id: 20,
    category: "seasonal",
    name: "Milho cozido",
    image: "/assets/products/milho-cozido.jpg",
    price: 12,
    bestSeller: false,
    cityAvailability: [
      "recife",
    ],
  },
];