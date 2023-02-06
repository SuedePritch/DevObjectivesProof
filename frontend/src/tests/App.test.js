import puppeteer from "puppeteer";
jest.setTimeout(60000);
let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});

describe(`App Loading`, () => {
  it("App loads", async () => {
    const app = (await page.$(".App")) ? true : false;
    expect(app).toBe(true);
  });
  it("Login Form loads", async () => {
    const app = (await page.$(".Login")) ? true : false;
    expect(app).toBe(true);
  });
  it("SignUp Form loads", async () => {
    const app = (await page.$(".Signup")) ? true : false;
    expect(app).toBe(true);
  });
});

afterAll(async () => {
  browser.close();
});
