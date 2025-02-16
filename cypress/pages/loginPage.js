class LoginPage{
    seletctorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors
    }
    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithAnyUser(usarname,password){
        cy.get(this.seletctorsList().usernameField).type(usarname)
        cy.get(this.seletctorsList().passwordField).type(password)
        cy.get(this.seletctorsList().loginButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.seletctorsList().wrongCredentialAlert)
    }
}

export default LoginPage