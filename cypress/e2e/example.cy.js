// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })

  it('click and alert', () => {
    cy.visit('/')
    cy.get('.testBtn').click()
    cy.on('window:alert', (text) => {
      expect(text).to.equal(`123`)
    })
  })
})
