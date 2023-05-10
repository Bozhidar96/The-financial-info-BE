import { getSymbols } from "../src/api";
import { ResponseData } from "../src/interfaces";

describe("getSymbols", () => {
  it("returns an array of ResponseData objects", async () => {
    const responseData: ResponseData[] = await getSymbols();

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
