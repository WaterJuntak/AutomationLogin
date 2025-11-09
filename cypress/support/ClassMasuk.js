class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    inputUsername(username) {
        cy.get('[name="username"]').type(username)
    }
    inputPassword(password) {
        cy.get('[name="password"]').type(password)
    }
    loginButton() {
        cy.get('[type="submit"]').should('be.visible')
        cy.get('[type="submit"]').click()
    }
    AssertionLogin(link, alert) {
        cy.url(link)
        cy.contains(alert).should('be.visible')
    }
    interceptUserApi(link, aliasName) {
        if (link === 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/leaves?date=2025-11-04'){
            cy.intercept('GET', link).as(aliasName)
        }
        else if (link === 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages'){
            cy.intercept('GET', link).as(aliasName)
        }
        else if(link === 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate'){
            cy.intercept('POST', link).as(aliasName)
        }
  }

    forgetPassword() {
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').should('be.visible')
        cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()
    }
}

export default new LoginPage()