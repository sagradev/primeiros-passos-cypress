import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'  
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInforPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInforPage.fillPersonalDetails(chance.first(), chance.string(), chance.last())
    myInforPage.fillEmplloyeeDetails(chance.ssn(), chance.ssn(), chance.cf())
    myInforPage.fillStatus()
    myInforPage.saveForm()
    myInforPage.customFields(chance.string())
})

})