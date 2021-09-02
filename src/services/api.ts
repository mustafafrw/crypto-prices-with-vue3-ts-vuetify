import { ICoin } from "../types/ICoin";
import axios from "axios";

enum endpoint {
  allCoins = '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
}

export const getAllCoins = async (): Promise<ICoin[]> => {
    return await 
    axios.get(endpoint.allCoins)
      .then(res => res.data);
}

export const getPage = async (page: number): Promise<ICoin[]> =>{
  return await 
    axios.get(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${ page }&sparkline=false`)
      .then(res => res.data);
}