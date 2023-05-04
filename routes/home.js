const express = require("express");
const router = express.Router();
const constants = require("../src/constants");

router.get("/", async function (req, res) {
  try {
    const responses = await Promise.all(
      constants.Symbols.map((symbol) =>
        fetch(`${constants.URL}?symbols=${symbol}`).then((responses) =>
          responses.json()
        )
      )
    );

    const percentageChanges = responses.map((response) => {
      return {
        symbol: response.data.items[0].basic.symbol,
        percentageValue:
          Math.round(
            (response.data.items[0].quote.change1DayPercent + Number.EPSILON) *
              100
          ) / 100,
      };
    });

    const templateData = {
      rows: percentageChanges.map((percentage) => ({
        symbol: percentage.symbol,
        percentageChanges: percentage.percentageValue,
      })),
    };

    res.render("home", templateData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
