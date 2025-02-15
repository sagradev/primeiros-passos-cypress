import userData from '../fixtures/user-data.json'

describe('Orange HRM Teste', () => {

  const seletctorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(seletctorsList.usernameField).type(userData.userSucces.username)
    cy.get(seletctorsList.passwordField).type(userData.userSucces.password)
    cy.get(seletctorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(seletctorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(seletctorsList.usernameField).type(userData.userFail.username)
    cy.get(seletctorsList.passwordField).type(userData.userFail.password)
    cy.get(seletctorsList.loginButton).click()
    cy.get(seletctorsList.wrongCredentialAlert)
})
})