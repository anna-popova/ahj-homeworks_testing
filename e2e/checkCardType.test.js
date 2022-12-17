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

    test('card should be valid', async () => {
      await page.goto('http://localhost:9000');

      await page.waitFor('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('6011111111111117');
      await validationFormBtn.click();

      await page.waitFor('.validation-form__valid');
      await page.waitFor('.validation-form__no-valid .hidden');
  });

    test('card should be invalid', async () => {
      await page.goto('http://localhost:9000');

      await page.waitFor('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('6011111111111115');
      await validationFormBtn.click();

      await page.waitFor('.validation-form__no-valid');
      await page.waitFor('.validation-form__valid .hidden');
    });

    //закрыть браузер
    afterAll(async () => {
        await browser.close();
    })
});

