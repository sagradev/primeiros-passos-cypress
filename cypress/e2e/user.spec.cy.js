import userData from '../fixtures/user-data.json'

describe('Orange HRM Teste', () => {

  const seletctorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField:".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(seletctorsList.usernameField).type(userData.userSucces.username)
    cy.get(seletctorsList.passwordField).type(userData.userSucces.password)
    cy.get(seletctorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(seletctorsList.dashboardGrid)
    cy.get(seletctorsList.myInfoButton).click()
    cy.get(seletctorsList.firstNameField).clear().type('FirstNameTeste')
    cy.get(seletctorsList.lastNameField).clear().type('LastNameTeste')
    cy.get(seletctorsList.genericField).eq(3).clear().type('654321')
    cy.get(seletctorsList.genericField).eq(7).clear().type('2025-02-10')
    //cy.get(seletctorsList.dateCloseButton).click()
    cy.get(seletctorsList.dateField).eq(0).clear().type('2025-02-15')
    cy.get(seletctorsList.genericField).eq(4).clear().type('666666')
    cy.get(seletctorsList.genericField).eq(5).clear().type('16511006')
    cy.get(seletctorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(seletctorsList.usernameField).type(userData.userFail.username)
    cy.get(seletctorsList.passwordField).type(userData.userFail.password)
    cy.get(seletctorsList.loginButton).click()
    cy.get(seletctorsList.wrongCredentialAlert)
})
})