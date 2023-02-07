import puppeteer from "puppeteer";
import {inactivityTimerMinutes} from '../App'

console.log(inactivityTimerMinutes)
jest.setTimeout(60000);
let browser:any;
let page:any;
beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
});

describe(`inactivityTimer`, () => {
  it("Timer starts at zero", async () => {
    await new Promise((r) => setTimeout(r, 1000));
    expect(inactivityTimerMinutes).toBe(0)
  });
  
});

afterAll(async () => {
  browser.close();
});
