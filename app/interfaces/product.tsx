import { Planet } from "./planet";
import { Ship } from "./ship";
import { Vehicle } from "./vehicle";
import { People } from "./people";
import { Films } from "./films";

// Define the product type
export interface Product {
  [key: string]:
    | Planet
    | Ship
    | Films
    | People
    | Vehicle
    | string
    | number
    | any;
}
