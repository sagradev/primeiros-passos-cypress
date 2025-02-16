import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPages'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage ()
const dashboardPages = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Teste', () => {

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucces.username, userData.userSucces.password)
    dashboardPages.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPerdonalDetail(chance.first(), chance.last())
    myInfoPage.fillEmplyDetails('555555','666666','1216514','2025-03-25')
    myInfoPage.saveForm()
  })
})