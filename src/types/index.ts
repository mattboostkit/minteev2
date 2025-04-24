export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  size: string;
  category: string;
  inStock: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}