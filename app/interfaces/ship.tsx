export interface Ship {
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  crew: number;
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: number;
  starship_class: string;
  img: string;

  [key: string]: string | number;
}
