import { Symbols, URL } from "../constants";

interface ResponseData {
  data: {
    items: {
      basic: {
        symbol: string;
      };
      quote: {
        change1DayPercent: number;
      };
    }[];
  };
}

const fetchSymbols = (): Promise<ResponseData[]> => {
  return Promise.all(
    Symbols.map((symbol: string) =>
      fetch(`${URL}?symbols=${symbol}`).then((responses) => responses.json())
    )
  );
};

export { fetchSymbols };
