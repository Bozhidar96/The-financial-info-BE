import { getSymbols } from "../api";
import { ResponseData } from "../interfaces";

export const getSymbol = (): Promise<ResponseData[]> => {
  return getSymbols();
};
