const user = require("../fixtures/user.json")
const selector = require("../fixtures/selector.json")


describe("advin login", () => {
    beforeEach(() => {
        cy.visit("http://qamid.tmweb.ru/admin")
    })

    it("log in with a valid password and login as an admin", () => {
        cy.login(user.adminEmail, user.adminPass)
        cy.contains(selector.loginVerification).should("be.visible")
    });
   
    it("log in with an invalid password and log in as an admin", () => {
        cy.login(user.adminEmail, user.invalidPassword);
        cy.contains(selector.passwordError).should("be.visible");
      });

})