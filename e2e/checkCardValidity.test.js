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

        await page.waitFor('.validation-form');
    });

    test('get type of card American Express', async () => {
      await page.goto('http://localhost:9000');

      await page.waitFor('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('371449635398431');
      await validationFormBtn.click();

      await page.waitFor('.cards-list__item .cards-list__item_amex');
  });

    test('get type of card Visa', async () => {
      await page.goto('http://localhost:9000');

      await page.waitFor('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('4111111111111111');
      await validationFormBtn.click();

      await page.waitFor('.cards-list__item .cards-list__item_visa');
    });

    //закрыть браузер
    afterAll(async () => {
        await browser.close();
    })
});

