class DashboardPage {
    login() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
    upgradeButton() {
        cy.get('[class="orangehrm-upgrade-container"]').should('be.visible')
        cy.get('[class="orangehrm-upgrade-container"]').click()
    }

    helpButton() {
        cy.get('[class="oxd-icon-button"]').should('be.visible')
        cy.get('[class="oxd-icon-button"]').click()
    }

    dropdownButton(alert) {
        cy.get('[class ="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()
        cy.get('[class = "oxd-dropdown-menu"]').contains(alert).click()
    }

    mainMenuButton(alert) {
        cy.get('[class="oxd-main-menu"]').click()
        cy.get('[class="oxd-main-menu-item-wrapper"]').contains(alert).click()
    }
    timeAtWorkButton() {
        cy.get('[class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]').should('be.visible')
        cy.get('[class="oxd-icon-button oxd-icon-button--solid-main orangehrm-attendance-card-action"]').click()
    }

    myActionButton(alert) {
        cy.get('[class="orangehrm-todo-list"]').should('be.visible')
        cy.get('[class="orangehrm-todo-list-item"]').contains(alert).click()
    }

    quickLunchButton(alert) {
        cy.get('[class="oxd-grid-3 orangehrm-quick-launch"]').should('be.visible')
        cy.get('[class="oxd-grid-item oxd-grid-item--gutters orangehrm-quick-launch-card"]').contains(alert).click()
    }
    
    interceptUserApi(link, aliasName) {
        cy.intercept('GET', link).as(aliasName)
    }

    AssertionDashboard(link, alert) {
        cy.url(link)
        cy.contains(alert).should('be.visible')
    }
}
export default new DashboardPage()