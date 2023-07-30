describe('Login Swag labs', function () {
    beforeEach(function () {
        cy.visit('/')

    })

    it('Login com usuário e senha válidos', function () {
        cy.dataTest('username').type(Cypress.env('user_name'))
        cy.dataTest('password').type(Cypress.env('user_password'), { log: false })
        cy.dataTest('login-button').click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}inventory.html`)
    })

    it('Login com usuário e senha inválidos ', function () {
        cy.dataTest('username').type('problem_user2')
        cy.dataTest('password').type('secret_sauce2', { log: false })
        cy.dataTest('login-button').click()
        cy.alert().contains('Epic sadface: Username and password do not match any user in this service')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
    })

    it('Login com usuário válido e senha inválida', function () {
        cy.dataTest('username').type(Cypress.env('user_name'))
        cy.dataTest('password').type('secret_sauce2', { log: false })
        cy.dataTest('login-button').click()
        cy.alert().contains('Epic sadface: Username and password do not match any user in this service')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
    })

    it('Login com usuário inválido e senha válida', function () {
        cy.dataTest('username').type('problem_user2')
        cy.dataTest('password').type(Cypress.env('user_password'), { log: false })
        cy.dataTest('login-button').click()
        cy.alert().contains('Epic sadface: Username and password do not match any user in this service')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
    })

    it('Login campos vazios', function () {
        cy.dataTest('login-button').click()
        cy.alert().contains('Epic sadface: Username is required')
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
    })

})