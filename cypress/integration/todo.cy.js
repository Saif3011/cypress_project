/// <reference types ="cypress" />
it('should be able to add a todo ',()=>{

    cy.visit('/')
    cy.get('[data-testid="email"]').type('dako23775@gmail.com')
    cy.get('[data-testid="password"]').type('23775449')
    cy.get('[data-testid="submit"]').click()
    cy.get('[data-testid="add"]').click()
    cy.get('[data-testid="new-todo"]').type('learn cypress')
    cy.get('[data-testid="submit-newTask"] > .MuiButton-label').click()
    cy.get('[data-testid="todo-item"]').eq(0).should('have.text',"learn cypress")
    })
    it('should be able to mark  a todo as completed ',()=>{

        cy.visit('/')
        cy.get('[data-testid="email"]').type('dako23775@gmail.com')
        cy.get('[data-testid="password"]').type('23775449')
        cy.get('[data-testid="submit"]').click()
        cy.get('[data-testid="add"]').click()
        cy.get('[data-testid="new-todo"]').type('learn cypress')
        cy.get('[data-testid="submit-newTask"] > .MuiButton-label').click()
        cy.get('[data-testid="todo-item"]').eq(0).should('have.text',"learn cypress")
        cy.get('[data-testid="complete-task"]').eq(0).check()
        cy.get('[data-testid="todo-item"]').eq(0).should('have.css','background-color','rgb(33, 76, 97)')
        })