describe('Login Test', () => {
  it('Berhasil login dengan kredensial yang valid', () => {
    // Kunjungi halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Temukan elemen input email dan ketikkan alamat email
    cy.get('[name="username"]').type('Admin');

    // Temukan elemen input password dan ketikkan password
    cy.get('[name="password"]').type('admin123');

    // Klik tombol login
    cy.get('[type="submit"]').click();

    // Verifikasi bahwa URL telah berubah dan menampilkan pesan sukses
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard');
  });

    it('Gagal Login dengan Username dan Password kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(' ');
    cy.get('[name="password"]').type(' ');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('@Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Password Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin12%');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username dan Password Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('@Admin');
    cy.get('[name="password"]').type('admin12%');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(' ');
    cy.get('[name="password"]').type('admin123');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Password kosong', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type(' ');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Username kosong Password Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin12%');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('Gagal Login dengan Password kosong dan Username Invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin12%');
    cy.get('[type="submit"]').click();
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
});