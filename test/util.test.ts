import { fetchSymbols } from "../src/util";
import { ResponseData } from "../src/interfaces";

describe("fetchSymbols", () => {
  it("returns an array of ResponseData objects", async () => {
    const mockResponseData: ResponseData = {
      data: {
        items: [
          {
            basic: {
              symbol: "AAPL",
            },
            quote: {
              change1DayPercent: 0.5,
            },
          },
        ],
      },
    };

    const responseData: ResponseData[] = await fetchSymbols();

    expect(responseData).toBeInstanceOf(Array);
    expect(responseData.length).toBeGreaterThan(0);

    const firstResponse = responseData[0];
    expect(firstResponse).toMatchObject({
      data: {
        items: [
          {
            basic: {
              symbol: expect.any(String),
            },
            quote: {
              change1DayPercent: expect.any(Number),
            },
          },
        ],
      },
    });
  });
});
