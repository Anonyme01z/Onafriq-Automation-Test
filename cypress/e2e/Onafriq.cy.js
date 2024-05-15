

describe('Onafriq', {
  viewportHeight: 1300,
  viewportWidth: 960,
})

beforeEach(() =>{

  //Step 1
  cy.visit("https://www.automationexercise.com/")

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})

it('Onafriq', () => {
    cy.onafriq()
})


