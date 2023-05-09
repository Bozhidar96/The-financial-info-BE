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
  symbolName: string;
  percentageChanges: number;
}

export interface TemplateView {
  rows: RowData[];
}
