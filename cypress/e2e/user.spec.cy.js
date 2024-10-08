import userData from '../fixtures/users/userData.json'
describe('Orange HRM test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
  }

 

  it.only('User Info Update successfully', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userSucess.username)
      cy.get(selectorsList.passwordField).type(userData.userSucess.password)
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
      cy.get(selectorsList.dashboardGrid)
      cy.get(selectorsList.myInfoButton).click()
     
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
      //cy.get(selectorsList.genericField).eq(8).type('NikenameTest')
      //License Expiry Date = 0
      //dat of bith = 2
      //testfild = 8
  });
  it('login fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
  });
});


