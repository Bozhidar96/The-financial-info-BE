import { app } from "../app";
const request = require("supertest");

describe("GET /", () => {
  it("should return status 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
