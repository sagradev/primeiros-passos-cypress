describe('Orange HRM Teste', () => {

  const seletctorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(seletctorsList.usernameField).type('Admin')
    cy.get(seletctorsList.passwordField).type('admin123')
    cy.get(seletctorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(seletctorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(seletctorsList.usernameField).type('Test')
    cy.get(seletctorsList.passwordField).type('Test')
    cy.get(seletctorsList.loginButton).click()
    cy.get(seletctorsList.wrongCredentialAlert)
})
})