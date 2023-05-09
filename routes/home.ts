import express, { Request, Response, Router } from "express";
import { TemplateView } from "../src/interfaces";
import { getSymbol } from "../src/controllers";
import { getSymbolName } from "../src/util";

const router: Router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  try {
    const response = await getSymbol();

    const data = response.map(({ data }) => {
      const { basic, quote } = data.items[0];
      const symbol = basic.symbol;
      const percentageValue =
        Math.round((quote.change1DayPercent + Number.EPSILON) * 100) / 100;
      return { symbol, percentageValue };
    });

    const templateView: TemplateView = {
      rows: data.map(({ symbol, percentageValue }) => ({
        percentageChanges: percentageValue,
        symbolName: getSymbolName(symbol),
      })),
    };

    res.render("home", templateView);
  } catch (error: any) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
