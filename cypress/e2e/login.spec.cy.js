describe('Orange HRM test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('login successfully', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
      cy.get(selectorsList.usernameField).type('Admin')
      cy.get(selectorsList.passwordField).type('admin123')
      cy.get(selectorsList.loginButton).click()
      cy.location('pathname').should('equal', '/dashboard/index')
      cy.get(selectorsList.wrongCredentialAlert).contains('Dashboard')
  });
  it('login fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
      cy.get(selectorsList.usernameField).type('Test')
      cy.get(selectorsList.passwordField).type('Test')
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.wrongCredentialAlert)
  });
});


