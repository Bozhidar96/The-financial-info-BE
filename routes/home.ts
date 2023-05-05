import express, { Request, Response, Router } from "express";
import { fetchSymbols } from "../src/util/util";
import { TemplateView } from "../src/interfaces";

const router: Router = express.Router();

router.get("/", async function (req: Request, res: Response) {
  try {
    const response = await fetchSymbols();
    const data = response.map((response) => {
      return {
        symbol: response.data.items[0].basic.symbol,
        percentageValue:
          Math.round(
            (response.data.items[0].quote.change1DayPercent + Number.EPSILON) *
              100
          ) / 100,
      };
    });

    const templateView: TemplateView = {
      rows: data.map((data) => ({
        symbol: data.symbol,
        percentageChanges: data.percentageValue,
      })),
    };

    res.render("home", templateView);
  } catch (error: any) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
