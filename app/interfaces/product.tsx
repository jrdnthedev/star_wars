import { Planet } from "./planet";
import { Ship } from "./ship";
import { Vehicle } from "./vehicle";

// Define the product type
export interface Product {
  [key: string]: Planet | Ship | Vehicle | string | number;
}
