import puppeteer from "puppeteer";

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
describe(`Signup`, () => {
  it("signs up new user", async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:3000/")
    await page.type("#signupUsername", "Big Jim")
    await page.type("#signupEmail", "jim@email.com")
    await page.type("#signupPassword", "password1234")
    await page.click(".signup-submit")
    await new Promise((r) => setTimeout(r, 1000));
    //page should remove login/signup forms if user has successfully logged in 
    const signupForm = (await page.$(".Signup")) ? true : false;
    expect(signupForm).toBe(false)
});
});
describe(`Login`, () => {
  it("login user", async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:3000/")
    await page.type("#loginEmail", "james@gmail.com")
    await page.type("#loginPassword", "password")
    await page.click(".login-submit")
    await new Promise((l) => setTimeout(l, 1000));
    //page should remove login/signup forms if user has successfully logged in 
    const loginForm = (await page.$(".Login")) ? true : false;
    expect(loginForm).toBe(false)
});
});

afterAll(async () => {
  browser.close();
});
