import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'  
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
    submitButton: "[type='submit']",
    firstNameField: "[name='firstName']",
    midleNameField: "[name='middleName']",
    lastNameField:"[name='lastName']",
    genericField: ".oxd-input--active",
    dateField:"[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    comboBox: "[tabindex='0']",
    wrongCredentialAlert: "[role='alert']",
  }

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    cy.get(selectorList.firstNameField).clear().type('Tet123')
    cy.get(selectorList.midleNameField).clear().type('test')
    cy.get(selectorList.lastNameField).clear().type('Testando')
    cy.get(selectorList.genericField).eq(3).clear().type('IdTest')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.dateField).eq(0).click()
    cy.get(':nth-child(17) > .oxd-calendar-date').click()
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.genericField).eq(5).clear().type('DriverLicenceTest')
    cy.get(selectorList.genericField).eq(8).clear().type('TestField')
    cy.get(selectorList.comboBox).eq(0).click()
    cy.get(':nth-child(5) > span').click()
    //cy.get(selectorList.submitButton).eq(0).click()
    //cy.get('body').should('contain', 'Successfully Updated')
    cy.get(selectorList.comboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(selectorList.comboBox).eq(2).click()
    cy.get('.oxd-select-dropdown > :nth-child(8)').click()
    cy.get(selectorList.submitButton).eq(1).click({force:true})
    cy.get('body').should('contain', 'Successfully Saved')
})

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    cy.get(selectorList.submitButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})