/// <reference types="cypress" />

var faker = require('faker');

context('Funcionalidade Pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/my-account/') 
    }); 

    it('Deve completar o pré cadastro com sucesso', () => {
        let emailfaker = faker.internet.email(nomefaker)
        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });
});