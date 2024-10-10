import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPages.js';
import MenuPage from '../pages/menuPage.js';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM test', () => {

  const selectorsList = {
    
    
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    genericCombox: ".oxd-select-text--active",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(6) > span",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

 

  it.only('User Info Update successfully', () => {
      loginPage.accesLoginPage()
      loginPage.loginWithUser(userData.userSucess.username,userData.userSucess.password)
      
      
      dashboardPage.checkDashboardPage()

      menuPage.accessMyMinfo()
      
      
    
     
      cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
      cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
      cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
      cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
      cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
      cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-10')
      cy.get(selectorsList.dateCloseButton).click()
      cy.get(selectorsList.submitButton).eq(0).click()
      cy.get('body').should('contain', 'Successfully Updated')
      cy.get('.oxd-toast-close')

      cy.get(selectorsList.genericCombox).eq(0).click()
      cy.get(selectorsList.secondItemCombobox).click()

      cy.get(selectorsList.genericCombox).eq(1).click()
      cy.get(selectorsList.thirdItemCombobox).click() 
  });
  it('login fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
  });
});


