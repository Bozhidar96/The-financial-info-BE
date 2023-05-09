import express, { Request, Response } from "express";
import request from "supertest";
import router from "../routes/home";

describe("Home Route", () => {
  it("should handle errors", async () => {
    jest.mock("../src/util", () => ({
      getSymbol: jest.fn(() => {
        throw new Error("Test Error");
      }),
    }));

    const app = express();
    app.use("/", router);
    const response = await request(app).get("/");
    expect(response.status).toBe(500);
    expect(response.text).toContain("Internal Server Error");
  });
});
