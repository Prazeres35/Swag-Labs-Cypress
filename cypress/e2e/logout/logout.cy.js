describe('Logout', function () {
    beforeEach(function () {
        cy.visit('/')
    })

    it('Executar logout', function () {
        cy.login()
        cy.get('div[class="bm-burger-button"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
    })

})