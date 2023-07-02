/// <reference types ="cypress" />



import LoginPage from  '../pages/loginPage'
import TodoPage from '../pages/todoPage';

it('should be able to login ',()=>{
const loginPage = new LoginPage()

loginPage
.load()
.login('dako23775@gmail.com','23775449')
.welcomeMessageShouldbeVisible();

//cy.visit('/')
//cy.get('[data-testid="email"]').type('dako23775@gmail.com')
//cy.get('[data-testid="password"]').type('23775449')
//cy.get('[data-testid="submit"]').click()
//cy.get('[data-testid="welcome"]').should('be.visible')
})