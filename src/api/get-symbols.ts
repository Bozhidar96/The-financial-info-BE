import axios from "axios";
import { SYMBOLS, URL } from "../constants";
import { ResponseData } from "../interfaces";

export const getSymbols = (): Promise<ResponseData[]> => {
  return Promise.all(
    SYMBOLS.map((symbol) =>
      axios.get(`${URL}?symbols=${symbol.code}`).then((response) => ({
        ...response.data,
      }))
    )
  );
};
