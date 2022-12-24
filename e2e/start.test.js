import puppeteer from 'puppeteer';

describe('page start', () => {
    let browser;
    let page;

    beforeAll(async () => {
      //открыть браузер
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });

        //просим браузер открыть новую страницу
        page = await browser.newPage();
    });

    //тесты
    test('test page rendering', async () => {
        await page.goto('http://localhost:9000');

        await page.waitForSelector('body');
    });

    //закрыть браузер
   //  afterAll(async () => {
   //      await browser.close();
   //  })
	browser.close();
});

