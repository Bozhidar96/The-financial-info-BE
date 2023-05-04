const express = require("express");
const router = express.Router();
const fetchSymbols = require("../src/util/util");

router.get("/", async function (req, res) {
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

    const templateView = {
      rows: data.map((data) => ({
        symbol: data.symbol,
        percentageChanges: data.percentageValue,
      })),
    };

    res.render("home", templateView);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


module.exports = router;
