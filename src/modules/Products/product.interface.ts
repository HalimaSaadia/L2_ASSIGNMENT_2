export type TCategory = "Mountain" | "Road" | "Hybrid" | "Electric";

export type TProduct = {
  name: string;
  brand: string;
  price: number;
  category: TCategory;
  description:string;
  quantity:number;
  inStock: boolean;
};
