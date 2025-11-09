describe('Verifikasi fungsi Login', () => {
  it('Berhasil login dengan kredensial yang valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit').as('subunit');
    cy.get('[type="submit"]').click();
    cy.wait('@subunit').its('response.statusCode').should('eq', 200);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  });

  it('Gagal Login dengan Username dan Password kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(' ');
    cy.get('[name="password"]').type(' ');

    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/events/push').as('push');
    cy.get('[type="submit"]').click();
    cy.wait('@push').its('response.statusCode').should('eq', 200);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('@Admin');
    cy.get('[name="password"]').type('admin123');
    
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Validasi');
    cy.get('[type="submit"]').click();
    cy.wait('@Validasi').its('response.statusCode').should('eq', 302);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Password Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin12%');
    
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Validasi');
    cy.get('[type="submit"]').click();
    cy.wait('@Validasi').its('response.statusCode').should('eq', 302);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username dan Password Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('@Admin');
    cy.get('[name="password"]').type('admin12%');
    
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Validasi');
    cy.get('[type="submit"]').click();
    cy.wait('@Validasi').its('response.statusCode').should('eq', 302);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(' ');
    cy.get('[name="password"]').type('admin123');
    
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Validasi');
    cy.get('[type="submit"]').click();
    cy.wait('@Validasi').its('response.statusCode').should('eq', 302);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Password kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type(' ');
    
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('action');
    cy.get('[type="submit"]').click();
    cy.wait('@action').its('response.statusCode').should('eq', 200);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username kosong Password Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin12%');
    
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Validasi');
    cy.get('[type="submit"]').click();
    cy.wait('@Validasi').its('response.statusCode').should('eq', 302);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Password kosong dan Username Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin12%');
    
    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('Validasi');
    cy.get('[type="submit"]').click();
    cy.wait('@Validasi').its('response.statusCode').should('eq', 302);
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

});