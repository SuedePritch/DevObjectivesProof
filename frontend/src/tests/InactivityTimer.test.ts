import puppeteer from 'puppeteer';
jest.setTimeout(1800000);
describe('Timer', () => {
  let browser: any;
  let page: any;
  let page2: any;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless:false,
      slowMo:50
    });
    // open the page
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#inactivityTimer')
    
  });
  afterAll(async () => {
    await browser.close();
  });
  it('disconnects from socket when user is inactive', async () => {
    // click away
    page2 = await browser.newPage()
    await page2.goto('https://www.google.com')
    await new Promise(resolve => setTimeout(resolve, 1000));
    // click back before the timer fires
    await page.bringToFront();
    // then check VA.socket.connected
    let connected = await page.evaluate(() => window.connected);
    expect(connected).toBe(true)
    await page2.bringToFront();
    // wait for the total timer threshold to have passed
    await new Promise(resolve => setTimeout(resolve, 2000));
    // then check VA.socket.connected
    connected = await page.evaluate(() => window.connected);
    expect(connected).toBe(false)
})
})