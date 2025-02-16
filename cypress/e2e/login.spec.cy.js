import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPages'

const loginPage = new LoginPage ()
const dashboardPages = new DashboardPage()

describe('Login Orange HRM Teste', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
})
it('Login - Success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucces.username, userData.userSucces.password)
  dashboardPages.checkDashboardPage()
})

})