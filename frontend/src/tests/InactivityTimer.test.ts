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
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('#inactivityTimer')
    
  });
  afterAll(async () => {
    await browser.close();
  });
  it('resets the timer on page click', async () => {
    const element = await page.$('#inactivityTimer');
    let textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(0)
    await new Promise(resolve => setTimeout(resolve, 60000));
    textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(1)
    await page.click('body')
    textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(0)
})
  it('resets the timer on scroll', async () => {
    const element = await page.$('#inactivityTimer');
    let textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(0)
    await new Promise(resolve => setTimeout(resolve, 60000));
    textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(1)
    await page.keyboard.press("PageDown");
    textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(0)
})
  it('resets the timer when user clicks on tab/page', async () => {
    const element = await page.$('#inactivityTimer');
    let textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(0)
    await new Promise(resolve => setTimeout(resolve, 60000));
    textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(1)
    page2 = await browser.newPage()
    await page2.goto('https://www.google.com')
    await new Promise(resolve => setTimeout(resolve, 60000));
    await page.bringToFront();
    textContent = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
    expect(parseInt(textContent)).toBe(0)
})
})