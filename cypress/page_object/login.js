class LoginPage {
  get emailInput() {
    return cy.get("input").eq(0);
  }
  get passInput() {
    return cy.get("input").eq(1);
  }
  get loginBtn() {
    return cy.get("button").eq(0);
  }
  get headingText() {
    return cy.get("h1");
  }
  get searchBtn() {
    return cy.get("button").eq(0);
  }

  login(email, pass) {
    this.emailInput.type(email);
    this.passInput.type(pass);
    this.loginBtn.click();
  }
}

export const loginPage = new LoginPage();
