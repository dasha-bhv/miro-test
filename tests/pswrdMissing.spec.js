// импортируем библиотеку для фейкового email
const faker = require('faker');

describe('Check that password is missing', () => {
  it('error will appear if password is missing', async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // Создаем объект для работы с ожиданиями
    const EC = ExpectedConditions;
    // выключаем проверку на AngularJS
    await browser.waitForAngularEnabled(false);
    // открываем страницу miro login
    await browser.get('https://miro.com/login/');
    // создаем элементы по css = input work email
    const WorkEmail = element(by.css("input[id='email']"));
    // объявляем переменную для фейкового email
    const fakeMail = faker.internet.email();
    // вводим email  в поле ввода
    await WorkEmail.sendKeys(fakeMail);
    // объявляем переменную для кнопки sign in
    const loginButton = element(by.css('button.signup__submit'));
    // ждем появления кнопки sign in чтобы войти
    await browser.wait(EC.presenceOf(loginButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for login button');
    // кликаем по кнопке sign in
    await loginButton.click();
    // задаем переменную для сообщения об отсутствии пароля
    const pswdMsg = element(by.className('signup__error-item'));
    // eslint-disable-next-line max-len
    // await browser.wait(EC.visibilityOf(pswdMsg), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for message');
    // ждем ее;
    // убеждаемся в том, что текст именно тот самый
    expect(pswdMsg.getText()).toBe('Please enter your password.');
    // await browser.sleep(1000);
  }, 100000);
});
