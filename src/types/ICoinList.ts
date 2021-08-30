export interface ICoinList {
  data?: ICoin[];
}

export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  marketCap: number;
}
