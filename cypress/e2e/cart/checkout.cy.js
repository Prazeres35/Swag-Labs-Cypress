describe('checkout', function () {
    beforeEach(function () {
        cy.programaticLogin()

    })

    it('Comprando um único produto', function () {
        cy.checkProduct()
        cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.class('shopping_cart_link').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}cart.html`)
        cy.checkProduct()
        cy.class('btn btn_action btn_medium checkout_button').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}checkout-step-one.html`)
        cy.form()
        cy.class('submit-button btn btn_primary cart_button btn_action').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}checkout-step-two.html`)
        cy.fullCheck()
        cy.class('btn btn_action btn_medium cart_button').click()
        cy.class('complete-header').contains('Thank you for your order!')
    })

    it('Comprando mais de um produto', function () {
        cy.checkMoreproducts()
        cy.itemSelection()
        cy.class('shopping_cart_link').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}cart.html`)
        cy.checkMoreproducts()
        cy.class('btn btn_action btn_medium checkout_button').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}checkout-step-one.html`)
        cy.form()
        cy.class('submit-button btn btn_primary cart_button btn_action').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}checkout-step-two.html`)
        cy.fullCheck2()
        cy.class('btn btn_action btn_medium cart_button').click()
        cy.class('complete-header').contains('Thank you for your order!')

    })



})