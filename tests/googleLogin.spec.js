
describe('Google auth', () => {
  it('Google auth works', async () => {
    // Создаем объект для работы с ожиданиями
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // Создаем объект для работы с ожиданиями
    const EC = protractor.ExpectedConditions;
    // выключаем проверку на AngularJS
    await browser.waitForAngularEnabled(false);
    // открываем страницу miro login
    await browser.get('https://miro.com/login/');
    // создаем элемент по css =img Google
    const GoogleButton = element(by.css("img[title='Google']"));
    // ждем появления иконки  google
    await browser.wait(EC.presenceOf(GoogleButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for goolge button');
    // кликаем по иконке google
    await GoogleButton.click();
    // задаем переменную для попапа
    const socialtos = element(by.className('socialtos__bg'));
    // ждем попап
    await browser.wait(EC.presenceOf(socialtos), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'Wait for Terms popup');
    // еще ждем
    await browser.sleep(1000);
    // задаем переменную для кнопки Yes I agree
    const iAgree = element(by.className('js__socialtos-login'));
    // ждем кнопку
    await browser.wait(EC.presenceOf(iAgree), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'Wait to click on "I agree"');
    // кликаем по кнопке
    await iAgree.click();
    await browser.sleep(1000);
    // ожидаем url для авторизации в google
    await browser.get('https://accounts.google.com/signin/oauth/identifier?client_id=1062019541050-8mvc17gv9c3ces694hq5k1h6uqio1cfn.apps.googleusercontent.com&as=zlEeO7c0kvxP7eXHoRC-nQ&destination=https%3A%2F%2Fmiro.com&approval_state=!ChRYdl9Oa1YxbzY3V3FuVWdZWHI1QhIfVTdVS3h4bkUzUThjY0t0V0xtY192ZHFZdWpqZDZoWQ%E2%88%99AJDr988AAAAAXd_-cHvrrAXhoS4GccWehDTvKYOaxBFR&oauthgdpr=1&xsrfsig=ChkAeAh8T20ePFxkU_mcD9MedmWrkPTwI4RREg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow');
    // задаем переменную для ввода google email
    const emailGoogle = element(by.css("input[id='identifierId']"));
    // ожидаем поле ввода для email
    await browser.wait(EC.presenceOf(emailGoogle), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'Wait to see email google');
    // вводис в поле ввода email
    await emailGoogle.sendKeys('bdashatest@gmail.com');
    // кликаем Enter в поле ввода
    emailGoogle.sendKeys(protractor.Key.ENTER);
    // eslint-disable-next-line max-len
    // await browser.wait(EC.presenceOf(nextEmail), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'Wait to see Next button for email"');
    // await nextEmail.click();
    // задаем переменную для ввода пароля
    const pswrdGoogle = element(by.css("input[name='password']"));
    // ожидаем увидеть поле для ввода пароля
    await browser.wait(EC.visibilityOf(pswrdGoogle), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'Wait to see password google');
    // вводим пароль
    await pswrdGoogle.sendKeys('bdashatest_account');
    // кликаем Enter в поле ввода
    pswrdGoogle.sendKeys(protractor.Key.ENTER);
    // ждем
    await browser.sleep(1000);
    // await browser.get('https://accounts.google.ru/accounts/SetSID');
    // ожидаем увижеть url
    await browser.get('https://miro.com/app/');
    // нас редиректнет, ожидаем другой url
    await browser.get('https://miro.com/app/dashboard/');
    // задаем переменную для иконки провиля , т.к. она в хедере ищем ее там сверху
    const userProfileButton = element(by.css('.dashboard-header--top .user-profile__button'));
    // ждем кнопку профиля
    await browser.wait(EC.presenceOf(userProfileButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for userProfileButton at the right');
    // ждем когда элемент станет кликабельным
    await browser.wait(EC.elementToBeClickable(userProfileButton), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for clickable');
    // наконец-то кликаем по нему
    await userProfileButton.click();
    // задаем переменную для email в профиле
    const userEmail = element(by.className('user-profile__email'));
    // ожидаем увидеть email после клика по кнопке профиля
    await browser.wait(EC.presenceOf(userEmail), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'wait for user profile email wrapper');
    // ожидаем что email станет видимым
    await browser.wait(EC.visibilityOf(userEmail), jasmine.DEFAULT_TIMEOUT_INTERVAL);
    // убеждаемся что email именно тот, с которым мы и входили в профиль
    expect(userEmail.getText()).toBe('bdashatest@gmail.com');
    // жду чтобы увидеть, что я вижу тоже самое что видит тест
    await browser.sleep(5000);
    // тут просто описаны мои попытки что-то сделать в тесте
    // const setContinue=element(by.css('.rtb-btn rtb-btn--primary rtb-btn--fluid'));
    // eslint-disable-next-line max-len
    // await browser.wait(EC.presenceOf(setContinue), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'Wait to see Continue button');
    // const nextPswrd=element(by.css("div[id='passwordNext']"));
    // eslint-disable-next-line max-len
    // await browser.wait(EC.presenceOf(nextPswrd), jasmine.DEFAULT_TIMEOUT_INTERVAL, 'Wait to see Next button for password"');
    // await nextPswrd.click();
  }, 100000);
});
