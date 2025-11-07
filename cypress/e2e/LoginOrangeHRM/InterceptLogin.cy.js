describe('Verifikasi fungsi Login', () => {
  it('Berhasil login dengan kredensial yang valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2025-11-04').as('ActionSummary');
    cy.get('[type="submit"]').click();
    cy.wait('@ActionSummary').its('response.statusCode').should('eq', 200);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  });

  
});