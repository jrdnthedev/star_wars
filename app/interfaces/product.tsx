import { Planet } from "./planet";
import { Ship } from "./ship";

// Define the product type
export interface Product {
  [key: string]: Planet | Ship | string | number;
}
