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

    //тесты
    test('test', async () => {
        await page.goto('http://localhost:9000');

        await page.waitFor('body');
    });

    //закрыть браузер
    afterAll(async () => {
        await browser.close();
    })
});

