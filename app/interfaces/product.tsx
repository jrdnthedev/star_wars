import { Planet } from "./planet";
import { Ship } from "./ship";
import { Vehicle } from "./vehicle";
import { People } from "./people";

// Define the product type
export interface Product {
  [key: string]: Planet | Ship | People | Vehicle | string | number;
}
