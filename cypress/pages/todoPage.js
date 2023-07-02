class TodoPage{

get welcomeMessage() {

return cy.get('[data-testid="welcome"]');

   
}

welcomeMessageShouldbeVisible(){

    this.welcomeMessage.should('be.visible')
}



}
export default TodoPage;