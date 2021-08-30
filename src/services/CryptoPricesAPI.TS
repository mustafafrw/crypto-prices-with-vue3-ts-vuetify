import { ICoin } from "../types/ICoin";

export const getAllCoins = async (): Promise<ICoin[]> =>
  await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  )
  .then(val => val.json()
);