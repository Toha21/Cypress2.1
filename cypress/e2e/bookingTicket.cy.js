const user = require("../fixtures/user.json");
const selector = require("../fixtures/selector.json");

describe("booking ticket", () => {
    it("must book tickets for the specified session", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");
    cy.login(user.adminEmail, user.adminPass);
    cy.get(selector.openingSale).contains(selector.nameHall);
    cy.visit("/");
    cy.get(selector.chooseTime).click();
    cy.get(selector.chooseMovie).contains(selector.time).click();
    cy.contains(selector.timeConfirmation).should("be.visible");
    cy.get(selector.choosingPlace).click();
    cy.get(selector.pushButton).click();
    cy.url().should('include', '/client/payment.php')
    cy.get(selector.pushButton).click();
    cy.contains(selector.bookingConfirmation).should("be.visible");
    });
  });