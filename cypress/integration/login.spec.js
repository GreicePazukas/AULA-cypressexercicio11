/// <reference types="cypress" />


context('Funcionalidade Login', () => {

    beforeEach(() => {
       cy.visit('http://lojaebac.ebaconline.art.br/my-account/') 
    })
        
    afterEach(() => {
        cy.screenshot()
    });
    
it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.page-title').should('contain','Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
});

it('Deve exibir uma mensagem de erro ao inserir o formato de email incorreto ', () => {
    cy.get('#username').type('aluno@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
    
});
it('Deve exibir uma mensagem de erro ao inserir o formato de email incorreto', () => {
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste.com')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail')
    
    
    
});

});