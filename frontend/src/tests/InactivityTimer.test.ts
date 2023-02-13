/* eslint-disable jest/no-jasmine-globals */
import { resetTimer, startInactivityTimer, timerState} from "../App";
import puppeteer from "puppeteer";

jest.setTimeout(60000);
let browser:any;
let page:any;

describe("Inactivity timer", () => {

  beforeEach(() => {
    jest.useFakeTimers()
  });

  afterAll(async () => {
    browser.close();
  });

  it("logs disconnects from socket after 60 minutes of inactivity", () => {
    console.log = jest.fn()
    startInactivityTimer();
    jest.advanceTimersByTime(3600000)
      expect(console.log).toHaveBeenCalledWith("disconnected from socket due to inactivity");
  });

  it("resets timer when user interacts with page", async () => {
    console.debug(timerState)
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    resetTimer();
    startInactivityTimer();
    jest.advanceTimersByTime(3500000)
    console.debug(timerState)
    await page.waitForSelector("#login");
    await page.click("#login");
    jest.advanceTimersByTime(3600000)
    console.debug(timerState)
    expect(timerState.inactivityTimerMinutes).toBe(1)

    // timerState.inactivityTimerMinutes = 55;
    // window.dispatchEvent(new Event("focus"));
    // expect(timerState.inactivityTimerMinutes).toBe(0);
    // timerState.inactivityTimerMinutes = 55;
    // document.dispatchEvent(new MouseEvent("click"));
    // expect(timerState.inactivityTimerMinutes).toBe(0);
    // timerState.inactivityTimerMinutes = 55;
    // document.dispatchEvent(new Event("scroll"));
    // expect(timerState.inactivityTimerMinutes).toBe(0);
    // timerState.inactivityTimerMinutes = 55;
    // document.dispatchEvent(new TouchEvent("touchmove"));
    // expect(timerState.inactivityTimerMinutes).toBe(0);
  });
});
