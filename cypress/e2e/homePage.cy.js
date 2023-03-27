const selector = require("../fixtures/selector.json")

describe('should be displayed on the home page', () => {
  it('passes', () => {
    cy.visit('http://qamid.tmweb.ru')
    cy.get(selector.title).should('contain.text', 'Идёмвкино')
    cy.get(selector.daysWeek).should('have.length', 7)
    cy.get(selector.chooseMovie).should('be.visible')
  })
})