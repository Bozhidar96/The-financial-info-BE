export interface ResponseData {
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

export interface RowData {
  symbol: string;
  percentageChanges: number;
}

export interface TemplateView {
  rows: RowData[];
}
