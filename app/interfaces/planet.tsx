export interface Planet {
  id: number;
  name: string;
  terrain: string;
  gravity: string;
  population: string;
  img: string;

  [key: string]: string | number;
}
