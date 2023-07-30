describe('removeCart', function () {
    beforeEach(function () {
        cy.programaticLogin()

    })

    it('Remover item do carrinho na home', function () {
        cy.checkMoreproducts()
        cy.itemSelection()
        cy.removeCart()
    })

    it('Remover item dentro do carrinho', function () {
        cy.checkMoreproducts()
        cy.itemSelection()
        cy.class('shopping_cart_link').click()
        cy.removeCart()
    })

})