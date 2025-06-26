import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'  
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

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
    myInforPage.fillPersonalDetails('Julio na Gaita', 'e a bixarada', 'no vocal')
    myInforPage.fillEmplloyeeDetails('3333333', '222222', '111111111111')
    myInforPage.fillStatus()
    myInforPage.saveForm()
    myInforPage.customFields('Rock Rural')
})

})