/// <reference types="cypress" />

describe('tarefas', () => {

    it('deve caastrar uma nova tarefa', () => {
        cy.visit('http://localhost:8080')

        cy.get('input[placeholder="Add a new Task"]')
            .type('Ler um livro de Node.js')

        cy.contains('button', 'Create').click()
    })
})