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

      await page.goto('http://localhost:9000');

      await page.waitForSelector('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('371449635398431');
      await validationFormBtn.click();

      //!насколько я понимаю, тест не проходит, т.к. в доме уже есть .cards-list__item .cards-list__item_amex
      //!добавляется только .checked
      //?можно ли сделать проверку, что .checked добавляется не к page, а к элементу с классами .cards-list__item .cards-list__item_amex
      await page.waitForSelector('.cards-list__item .cards-list__item_amex .checked');
  }, 60000);

      test('type of card should be Visa', async () => {

        await page.goto('http://localhost:9000');

        await page.waitForSelector('.validation-form');

        const validationForm = await page.$('.validation-form');
        const validationFormInput = await validationForm.$('.validation-form__input');
        const validationFormBtn = await validationForm.$('.validation-form__btn');

        await validationFormInput.type('4111111111111111');
        await validationFormBtn.click();

        await page.waitForSelector('.cards-list__item .cards-list__item_visa .checked');
    }, 60000);

    test('type of card should be indefinite', async () => {

      await page.goto('http://localhost:9000');

      await page.waitForSelector('.validation-form');

      const validationForm = await page.$('.validation-form');
      const validationFormInput = await validationForm.$('.validation-form__input');
      const validationFormBtn = await validationForm.$('.validation-form__btn');

      await validationFormInput.type('9111111111111111');
      await validationFormBtn.click();

      await page.waitForSelector('.validation-form__no-type .active');
    }, 60000);

    //закрыть браузер
    afterAll(async () => {
        await browser.close();
    })
});

