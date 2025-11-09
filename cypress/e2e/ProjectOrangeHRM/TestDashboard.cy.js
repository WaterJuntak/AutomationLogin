import DashboardPage from "../../support/DashboardClass.js"
import DashboardData from '../../fixtures/DashboardData.json'

describe('Dashboard Test', () => {
    it('About', () => {s
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.dropdownButton(DashboardData.alert2)
        DashboardPage.AssertionDashboard(DashboardData.link2, DashboardData.alert2)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Support', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.dropdownButton(DashboardData.alert3)
        DashboardPage.AssertionDashboard(DashboardData.link3, DashboardData.alert3)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Change Password', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.dropdownButton(DashboardData.alert4)
        DashboardPage.AssertionDashboard(DashboardData.link4, DashboardData.alert4)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Admin', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert8)
        DashboardPage.AssertionDashboard(DashboardData.link7, DashboardData.alert8)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('PIM', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert9)
        DashboardPage.AssertionDashboard(DashboardData.link8, DashboardData.alert9)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Leave', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert10)
        DashboardPage.AssertionDashboard(DashboardData.link9, DashboardData.alert10)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Time', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert11)
        DashboardPage.AssertionDashboard(DashboardData.link10, DashboardData.alert11)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Recruitment', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert12)
        DashboardPage.AssertionDashboard(DashboardData.link11, DashboardData.alert12)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('My Info', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert13)
        DashboardPage.AssertionDashboard(DashboardData.link12, DashboardData.alert14)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Performance', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert15)
        DashboardPage.AssertionDashboard(DashboardData.link13, DashboardData.alert15)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Dashboard', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert16)
        DashboardPage.AssertionDashboard(DashboardData.link2, DashboardData.alert16)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Directory', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert17)
        DashboardPage.AssertionDashboard(DashboardData.link14, DashboardData.alert17)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Maintenance', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert18)
        DashboardPage.AssertionDashboard(DashboardData.link15, DashboardData.alert19)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Claim', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert20)
        DashboardPage.AssertionDashboard(DashboardData.link16, DashboardData.alert20)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Bizz', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.mainMenuButton(DashboardData.alert21)
        DashboardPage.AssertionDashboard(DashboardData.link17, DashboardData.alert21)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Time At Work', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.timeAtWorkButton()
        DashboardPage.AssertionDashboard(DashboardData.link18, DashboardData.alert22)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Pending Self Review', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.myActionButton(DashboardData.alert23)
        DashboardPage.AssertionDashboard(DashboardData.link19, DashboardData.alert24)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Candidate to Interview', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.myActionButton(DashboardData.alert25)
        DashboardPage.AssertionDashboard(DashboardData.link20, DashboardData.alert26)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Assign Leave', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.quickLunchButton(DashboardData.alert27)
        DashboardPage.AssertionDashboard(DashboardData.link21, DashboardData.alert27)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Leave List', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.quickLunchButton(DashboardData.alert28)
        DashboardPage.AssertionDashboard(DashboardData.link22, DashboardData.alert28)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Timesheets', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.quickLunchButton(DashboardData.alert29)
        DashboardPage.AssertionDashboard(DashboardData.link23, DashboardData.alert29)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Apply Leave', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.quickLunchButton(DashboardData.alert30)
        DashboardPage.AssertionDashboard(DashboardData.link24, DashboardData.alert30)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('My Leave', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.quickLunchButton(DashboardData.alert31)
        DashboardPage.AssertionDashboard(DashboardData.link25, DashboardData.alert31)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('My Timesheet', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.quickLunchButton(DashboardData.alert32)
        DashboardPage.AssertionDashboard(DashboardData.link26, DashboardData.alert32)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Help', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.helpButton()
        DashboardPage.AssertionDashboard(DashboardData.link6, DashboardData.alert7)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });

    it('Upgrade', () => {
        DashboardPage.login()
        DashboardPage.visit()
        DashboardPage.interceptUserApi(DashboardData.linkAPI, 'message')
        DashboardPage.upgradeButton()
        DashboardPage.AssertionDashboard(DashboardData.link1, DashboardData.alert1)
        cy.wait('@message').then((interception) => {
        expect(interception.response.statusCode).to.eq(304)
        });
    });
});