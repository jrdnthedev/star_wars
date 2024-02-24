export interface Vehicle {
  id: number;
  name: string;
  model: string;
  max_atmosphering_speed: string;
  passengers: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  cargo_capacity: string;
  consumables: string;
  crew: string;
  img: string;

  [key: string]: string | number;
}
