const constants = require("../constants");


const fetchSymbols = () => {
    return Promise.all(
      constants.Symbols.map((symbol) =>
        fetch(`${constants.URL}?symbols=${symbol}`).then((responses) =>
          responses.json()
        )
      )
    );
}

module.exports = fetchSymbols