class ForgetPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
    }
    inputUsername(username) {
        cy.get('[name="username"]').type(username)
    }
    cancelButton() {
        cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').should('be.visible')
        cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]').click()
    }

    resetButton() {
        cy.get('[type="submit"]').should('be.visible')
        cy.get('[type="submit"]').click()
    }

    cancelButton() {
        cy.get('[type="button"]').should('be.visible')
        cy.get('[type="button"]').click()
    }

    interceptUserApi(link, aliasName) {
        cy.intercept('GET', link).as(aliasName)
    }
    AssertionForget(link, alert) {
        cy.url(link)
        cy.contains(alert).should('be.visible')
    }
}
export default new ForgetPage()