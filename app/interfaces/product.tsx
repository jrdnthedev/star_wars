import { Planet } from "./planet";

// Define the product type
export interface Product {
  [key: string]: Planet | string | number;
}
