Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    cy.dataTest('username').type(user)
    cy.dataTest('password').type(password, { log: false })
    cy.dataTest('login-button').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('div[class="bm-burger-button"]').click()
    cy.get('a[id="logout_sidebar_link"]').click()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
})