import { Product } from './product.model';

export interface ProductSection {
  title: string;
  description: string;
  products: Product[];
}