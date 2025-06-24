import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitButton: "[type='submit']",
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid:".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    midleNameField: "[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField: ".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close"
  }

  it.only('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.submitButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('Tet123')
    cy.get(selectorList.midleNameField).clear().type('test')
    cy.get(selectorList.lastNameField).clear().type('Testando')
    cy.get(selectorList.genericField).eq(3).clear().type('IdTest')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.dateField).eq(0).clear().type('27-10-2026')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(5).clear().type('DriverLicenceTest')
    cy.get(selectorList.genericField).eq(8).clear().type('TestField')
    cy.get(selectorList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
})

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})