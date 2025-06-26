class LoginPage{
    selectorList() {
        const selectors ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().submitButton).click()
    }

    checkAccessInvalid(){
    cy.get(this.selectorList().submitButton).click()
    cy.get(this.selectorList().wrongCredentialAlert)
    }
}

export default LoginPage