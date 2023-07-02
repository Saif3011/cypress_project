class LoginPage{

// elements

get emailInput(){
return cy.get('[data-testid="email"]')
}
get passwordInput(){
    return cy.get('[data-testid="password"]')
    }

get submitButton(){

    return cy.get('[data-testid="submit"]')
}


// methode
    load(){

        cy.visit('/')
        return this;
    }

login(email,password){

    this.emailInput.type(email)
    this.passwordInput.type(password)
    this.submitButton.click()

}

}
export default LoginPage;