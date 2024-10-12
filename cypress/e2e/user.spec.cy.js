import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPages.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myInfoPage.js';

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM test', () => {


 

  it('User Info Update successfully', () => {
      loginPage.accesLoginPage()
      loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
      
      
      dashboardPage.checkDashboardPage()

      menuPage.accessMyMinfo()
      
      myInfoPage.fillPersonalDetails(chance.first(), chance.last()) 
      myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', 'LicenseNumber', '2025-07-29')
      myInfoPage.fillStatus()
      myInfoPage.saveForm()

  });


});


