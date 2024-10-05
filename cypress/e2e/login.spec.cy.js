describe('Orange HRM test', () => {
  it('login successfully', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
      cy.get("[name='username']").type('Admin')
      cy.get("[name='password']").type('admin123')
      cy.get("[type='submit']").click()
      cy.location('pathname').should('equal', '/dashboard/index')
      cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  });
  it('login fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')
      cy.get("[name='username']").type('Test')
      cy.get("[name='password']").type('Test')
      cy.get("[type='submit']").click()
      cy.get("[role='alert']")
  });
});


