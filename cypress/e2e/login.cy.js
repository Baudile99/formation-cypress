import loginPage from "./pages/loginPage";

describe('Login page tests', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it.only('should allow user to login with valid credentials', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.validUser.email, user.validUser.password);
      loginPage.verifHomePage();
    });

  });

  it('should allow user to login with an incorrect password', () => {
    loginPage.login('honore871@gmail.com', '123456');
    loginPage.verifAlertMessage();
  });

  it('should display an error for an invalid email and empty password field ', () => {
    loginPage.login("honore871", "");
    loginPage.verifErrorMesgForEmail();
    loginPage.verifErrorMesgForPassword();



  });

})