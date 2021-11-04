import { Product } from "@prisma/client";

export interface IProductsProps {
  products: Product[];
}

export interface IProductsServerProps {
  props: { products: Product[] };
}

export interface IProductProps {
  product: Product | null;
}

export interface IProductServerProps {
  props: { product: Product | null };
}
