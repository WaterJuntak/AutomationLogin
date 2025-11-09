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
}

export default new LoginPage()