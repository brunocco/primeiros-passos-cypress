import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPages.js';


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Login Orange HRM test', () => {
 

  it('login fail', () => {
      loginPage.accesLoginPage()
      loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
      loginPage.checkAccessInvalid()
  });

  it('login Sucess', () => {
    loginPage.accesLoginPage()
    loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
    dashboardPage.checkDashboardPage()
});

});


