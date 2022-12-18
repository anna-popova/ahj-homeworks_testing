import puppeteer from 'puppeteer';

describe('check type of card', () => {
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
    test('validation form should render on page start', async () => {
        await page.goto('http://localhost:9000');

        await page.waitForSelector('.validation-form');
    });

    test('type of card should be American Express', async () => {
      //jest.setTimeout(60000);

      await page.goto('http://localhost:9000');

      await page.waitForSelector('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('371449635398431');
      await validationFormBtn.click();

      await page.waitForSelector('.cards-list__item .cards-list__item_amex');
  }, 60000);

    test('type of card should be Visa', async () => {
      //jest.setTimeout(60000);

      await page.goto('http://localhost:9000');

      await page.waitForSelector('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('4111111111111111');
      await validationFormBtn.click();

      await page.waitForSelector('.cards-list__item .cards-list__item_visa');
    }, 60000);

    //закрыть браузер
    afterAll(async () => {
        await browser.close();
    })
});
