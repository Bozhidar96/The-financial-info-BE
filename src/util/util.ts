import { SYMBOLS } from "../constants";

export const getSymbolName = (code: string): string => {
  const symbol = SYMBOLS.find((symbol) => symbol.code === code);
  return symbol ? symbol.name : "";
};
