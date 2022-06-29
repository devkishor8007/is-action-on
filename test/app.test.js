const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

describe("/test endpoint", () => {
  it("should be a GET request", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });

  it("should be a POST request", async () => {
    const data = ["nodejs", "expressjs", "mongodb"];
    const data2 = ["nodejs", "expressjs"];
    const response = await request.post("/test");
    expect(response.status).toBe(200);
    expect(response._body.data).not.toBe(data);
    // .toStrictEqual - test that objects have the same types as well as structure
    expect(response._body.data).toStrictEqual(data2);
  });
});
