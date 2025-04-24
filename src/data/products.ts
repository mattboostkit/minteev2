import { Product } from '../types';

export const products: Product[] = [
  {
    id: "mint-classic-500ml",
    name: "Mintee Classic",
    description: "Our signature peppermint-infused water. Refreshingly cool with a crisp finish. Zero sugar, zero calories.",
    price: 2.99,
    imageSrc: "https://images.pexels.com/photos/3429782/pexels-photo-3429782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    size: "500ml",
    category: "Classic",
    inStock: true
  },
  {
    id: "mint-strong-500ml",
    name: "Mintee Strong",
    description: "Extra peppermint kick for those who want a more intense flavour experience. Zero sugar, zero calories.",
    price: 3.49,
    imageSrc: "https://images.pexels.com/photos/616838/pexels-photo-616838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    size: "500ml",
    category: "Strong",
    inStock: true
  },
  {
    id: "mint-lemon-500ml",
    name: "Mintee Lemon",
    description: "A refreshing blend of peppermint and lemon. Perfectly balanced for a zesty twist. Zero sugar, zero calories.",
    price: 3.29,
    imageSrc: "https://images.pexels.com/photos/2109787/pexels-photo-2109787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    size: "500ml",
    category: "Flavoured",
    inStock: true
  },
  {
    id: "mint-cucumber-500ml",
    name: "Mintee Cucumber",
    description: "Cool cucumber meets refreshing mint for the ultimate hydration experience. Zero sugar, zero calories.",
    price: 3.29,
    imageSrc: "https://images.pexels.com/photos/574063/pexels-photo-574063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    size: "500ml",
    category: "Flavoured",
    inStock: true
  },
  {
    id: "mint-classic-12pack",
    name: "Mintee Classic 12-Pack",
    description: "Our signature peppermint-infused water in a convenient 12-pack. Perfect for home or office.",
    price: 29.99,
    imageSrc: "https://images.pexels.com/photos/2873479/pexels-photo-2873479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    size: "12 x 500ml",
    category: "Multipacks",
    inStock: true
  },
  {
    id: "mint-variety-12pack",
    name: "Mintee Variety Pack",
    description: "Try all our flavours with this mixed 12-pack. Includes Classic, Strong, Lemon and Cucumber varieties.",
    price: 34.99,
    imageSrc: "https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    size: "12 x 500ml",
    category: "Multipacks",
    inStock: true
  }
];