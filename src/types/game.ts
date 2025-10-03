export interface Game {
  id: number;
  title: string;
  price: number;
  image: string;
  genre: string;
  discount?: number;
  isNew?: boolean;
}
