
describe('Check that auth works by email and password', () => {
  it('sure that case works', async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
    // Создаем объект для работы с ожиданиями
    const EC = ExpectedConditions;
    // выключаем проверку на AngularJS
    await browser.waitForAngularEnabled(false);

    // открываем страницу miro home page
    // await browser.get('https://www.miro.com/');
    await browser.get('https://miro.com/login/');
    // задаем переменную для поля с email
    const WorkEmail = element(by.css("input[id='email']"));
    // await WorkEmail.clear();
    // задаем переменную sign in
    // const SignInButton = element(by.css("a[id='header-login-btn']"));
    // ждем появление этого элемента (события presenceOf)
    // await browser.wait(EC.presenceOf(SignInButton), 5000, 'wait for sign in button');
    // кликаем по кнопке sign in
    // await SignInButton.click();
    // создаем элемент по css =img Google
    // const GoogleButton = element(by.css("img[title='Google']"));
    // ждем появления иконки  google
    // await browser.wait(EC.presenceOf(GoogleButton), 5000, 'wait for goolge button');

    // создаем элемент по css =img FB
    const FbButton = element(by.css("img[title='Facebook']"));
    // ждем появления иконки Facebook
    await browser.wait(EC.presenceOf(FbButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for facebook');
    // создаем элемент по css =img slack
    const SlackButton = element(by.css("img[title='Slack']"));
    // ждем появления иконки slack
    await browser.wait(EC.presenceOf(SlackButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for slack button');
    // создаем элементы по css = input work email и input password
    // const WorkEmail = element(by.css("input[id='email']"));
    const passwordButton = element(by.css("input[id='password']"));
    // ожидаем увидеть поле с email
    await browser.wait(EC.presenceOf(WorkEmail), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for WorkEmail field');
    // пишем в поля ввода логин и пароль
    // вводим имя пользователя
    await WorkEmail.sendKeys('dasha.lsk1992@mail.ru');
    // вводим пароль
    await passwordButton.sendKeys('dasha_miro');
    // создаем перменную для кнопки Sign In
    const loginButton = element(by.css('button.signup__submit'));
    // ждем появления кнопки sign in чтобы войти
    await browser.wait(EC.presenceOf(loginButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for login button');
    // пишем в элемент текст “protractor”
    // await inputButton.sendKeys('protractor');
    // кликаем по кнопке sign in
    await loginButton.click();
    // оджидаем увидеть  в URL "app/dashboard"
    await browser.wait(EC.urlContains('app/dashboard'), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for dashboard page');
    // создаем элементы по css span All boards
    // changes-modal
    // notifications-box
    // changes-close

    // объявление иконки профиля
    // объявление переменной для модального окна
    // const changeModal = element(by.className('md-content'));
    // ожидаем когда появится окно What's news
    // await browser.wait(EC.presenceOf(changeModal), 15000, 'wait for What\'s news block');

    // объявляем переменную чтобы закрыть окно What's news
    const closeModal = element(by.css('.changes-close'));
    // ожидаем увидеть кнопку закрытия окна What's news
    await browser.wait(EC.presenceOf(closeModal), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for presence of close modal button');
    // нажимаем на кнопку закрытия
    await closeModal.click();
    // ждем пока окно закроется
    await browser.sleep(1000);
    // вводим переменную для бэкграунда, который появился с модальным окном
    const modalBackground = element(by.css('.md-bg'));
    // ждем когда бэкграунд исчезнет
    await browser.wait(EC.invisibilityOf(modalBackground), jasmine.DEFAULT_TIMEOUT_INTERVAL);
    // задаем переменную для профиля
    const userProfileButton = element(by.css('.dashboard-header--top .user-profile__button'));
    // ожидаем иконку профиля
    await browser.wait(EC.presenceOf(userProfileButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for userProfileButton at the right');
    // ждем когда иконка станет кликабельной
    await browser.wait(EC.elementToBeClickable(userProfileButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for clickable');
    // кликаем по иконке профиля
    await userProfileButton.click();
    // задаем переменную для email пользователя который будет виден при нажатии на иконку
    const userEmail = element(by.className('user-profile__email'));
    // ожидаем появления иконки с профилем
    await browser.wait(EC.presenceOf(userEmail), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for user profile email wrapper');
    // ожидаем когда эта иконка будет видима
    await browser.wait(EC.visibilityOf(userEmail), jasmine.DEFAULT_TIMEOUT_INTERVAL);
    // убеждаемся что email соответствует требуемому значению
    expect(userEmail.getText()).toBe('dasha.lsk1992@mail.ru');
  }, 100000);
});
