Cypress.Commands.add('itemSelection', () => {
    cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
})

Cypress.Commands.add('class', value => {
    return cy.get(`[class="${value}"]`)
})

Cypress.Commands.add('form', () => {
    cy.dataTest('firstName').type('Flavio')
    cy.dataTest('lastName').type('Prazeres')
    cy.dataTest('postalCode').type('41192005')
})

Cypress.Commands.add('fullCheck', (
    item = Cypress.env('item'),
    price = Cypress.env('price'),
    tax = Cypress.env('tax'),
    total = Cypress.env('total')
) => {
    cy.get('[class="inventory_item_name"]').contains(item),
        cy.get('[class="inventory_item_price"]').contains(price),
        cy.get('[class="summary_tax_label"]').contains(tax),
        cy.get('[class="summary_info_label summary_total_label"]').contains(total)

})

Cypress.Commands.add('fullCheck2', (
    item = Cypress.env('item'),
    item2 = Cypress.env('item2'),
    price = Cypress.env('price'),
    price2 = Cypress.env('price2'),
    tax2 = Cypress.env('tax2'),
    total2 = Cypress.env('total2')
) => {
    cy.get('[class="inventory_item_name"]').contains(item),
        cy.get('[class="inventory_item_name"]').contains(item2),
        cy.get('[class="inventory_item_price"]').contains(price),
        cy.get('[class="inventory_item_price"]').contains(price2),
        cy.get('[class="summary_tax_label"]').contains(tax2),
        cy.get('[class="summary_info_label summary_total_label"]').contains(total2)

})

Cypress.Commands.add('checkProduct', (
    item_cart = Cypress.env('item'),
    price_cart = Cypress.env('price'),
) => {
    cy.get('[class="inventory_item_name"]').contains(item_cart)
    cy.get('[class="inventory_item_price"]').contains(price_cart)
})

Cypress.Commands.add('checkMoreproducts', (
    item_cart = Cypress.env('item'),
    item_cart2 = Cypress.env('item2'),
    price_cart = Cypress.env('price'),
    price_cart2 = Cypress.env('price2'),
) => {
    cy.get('[class="inventory_item_name"]').contains(item_cart)
    cy.get('[class="inventory_item_price"]').contains(price_cart)
    cy.get('[class="inventory_item_name"]').contains(item_cart2)
    cy.get('[class="inventory_item_price"]').contains(price_cart2)
})

Cypress.Commands.add('dataTest', value => {
    return cy.get(`[data-test="${value}"]`)
})

Cypress.Commands.add('alert', () => {
    return cy.get(`[class="error-message-container error"]`)
})

Cypress.Commands.add('programaticLogin', () => {
    cy.visit('/')
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
    cy.login()
})