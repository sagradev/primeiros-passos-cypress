import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPages'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage ()
const dashboardPages = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Teste', () => {

  const seletctorsList = {
  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucces.username, userData.userSucces.password)
    dashboardPages.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPerdonalDetail('Gustavo', 'Gutierrez')
    myInfoPage.fillEmplyDetails('555555','666666','1216514','2025-03-25')
    myInfoPage.saveForm()
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(seletctorsList.usernameField).type(userData.userFail.username)
    cy.get(seletctorsList.passwordField).type(userData.userFail.password)
    cy.get(seletctorsList.loginButton).click()
    cy.get(seletctorsList.wrongCredentialAlert)
})
})