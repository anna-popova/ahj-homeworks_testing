import puppeteer from 'puppeteer';

describe('page start', () => {
    let browser;
    let page;

    beforeEach(async () => {
      //открыть браузер
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });

        //просим браузер открыть новую страницу
        page = await browser.newPage();
    });

    test('test', async () => {
        await page.goto('http://localhost:9000');
    });

    //закрыть браузер
    afterAll(async () => {
        await browser.close();
    })
});

