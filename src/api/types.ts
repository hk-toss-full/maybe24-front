export type Category =
  | "musical"
  | "concert"
  | "play"
  | "classic"
  | "exhibition";

interface Round {
  roundId: string;
  totalCount: string;
  date: string;
  price: number;
}

interface Discount {
  type: string;
  rate: number;
}

// not used
interface Product {
  title: string;
  location: string;
  thumbnail: string;
  discount?: Discount;
  roundList: Round[];
}
