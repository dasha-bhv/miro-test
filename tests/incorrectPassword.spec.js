// импортируем библиотеку для фейкового email
const faker = require('faker');

describe('Check that password is incorrect', () => {
  it('error will appear after auth', async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // Создаем объект для работы с ожиданиями
    const EC = ExpectedConditions;
    // выключаем проверку на AngularJS
    await browser.waitForAngularEnabled(false);
    // открываем страницу miro login
    await browser.get('https://miro.com/login/');
    // создаем элементы по css = input work email и password
    const WorkEmail = element(by.css("input[id='email']"));
    const passwordButton = element(by.css("input[id='password']"));
    // ждем когда поле для ввода email появится
    await browser.wait(EC.presenceOf(WorkEmail), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for WorkEmail field');
    // пишем в поля ввода логин и некорректный пароль
    // объявляем переменную для фейкового email
    const fakeMail = faker.internet.email();
    // вводим email  в поле ввода
    await WorkEmail.sendKeys(fakeMail);
    // вводим пароль
    await passwordButton.sendKeys('password');
    // объявляем переменную для кнопки sign in
    const loginButton = element(by.css('button.signup__submit'));
    // ждем появления кнопки sign in чтобы войти
    await browser.wait(EC.presenceOf(loginButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for login button');
    // кликаем по кнопке sign in
    await loginButton.click();
    // задаем переменную для сообщения
    const incorctMsg = element(by.className('signup__error-item'));
    // ждем ее;
    await browser.wait(EC.visibilityOf(incorctMsg), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for message');
    // кликаем по кнопке sign in
    await browser.sleep(2000);
    // убеждаемся в том, что текст именно тот самый
    expect(incorctMsg.getText()).toContain('The email or password you entered is incorrect');
  }, 100000);
});
