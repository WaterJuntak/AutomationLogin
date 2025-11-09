import LoginPage from "../../support/ClassMasuk.js"
import DataMasuk from '../../fixtures/DataMasuk.json'

describe('Login Test', () => {
  it('Berhasil login dengan kredensial yang valid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.validUsername)
    LoginPage.inputPassword(DataMasuk.validPassword)
    LoginPage.interceptUserApi(DataMasuk.link3, 'ActionSummary')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link1, DataMasuk.alert1)
    cy.wait('@ActionSummary').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
  });

  it('Gagal Login dengan Username dan Password kosong', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.blankUsername)
    LoginPage.inputPassword(DataMasuk.blankPassword)
    LoginPage.interceptUserApi(DataMasuk.link4, 'messages')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert3)
    cy.wait('@messages').then((interception) => {
      expect(interception.response.statusCode).to.eq(304)
    })
  });

 it('Gagal Login dengan Username Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.invalidUsername)
    LoginPage.inputPassword(DataMasuk.validPassword)
    LoginPage.interceptUserApi(DataMasuk.link4, 'messages')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert2)
    cy.wait('@messages').then((interception) => {
      expect(interception.response.statusCode).to.eq(304)
    })
  });

  it('Gagal Login dengan Password Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.validUsername)
    LoginPage.inputPassword(DataMasuk.invalidPassword)
    LoginPage.interceptUserApi(DataMasuk.link4, 'messages')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert2)
    cy.wait('@messages').then((interception) => {
      expect(interception.response.statusCode).to.eq(304)
    })
  });

  it('Gagal Login dengan Username dan Password Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.invalidUsername)
    LoginPage.inputPassword(DataMasuk.invalidPassword)
    LoginPage.interceptUserApi(DataMasuk.link4, 'messages')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert2)
    cy.wait('@messages').then((interception) => {
      expect(interception.response.statusCode).to.eq(304)
    })
  });

  it('Gagal Login dengan Username kosong', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.blankUsername)
    LoginPage.inputPassword(DataMasuk.validPassword)
    LoginPage.interceptUserApi(DataMasuk.link5, 'validates')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert3)
    cy.wait('validates').then((interception) => {
      expect(interception.response.statusCode).to.eq(302)
    })
  });

  it('Gagal Login dengan Password kosong', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.validUsername)
    LoginPage.inputPassword(DataMasuk.blankPassword)
    LoginPage.interceptUserApi(DataMasuk.link5, 'validates')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert3)
    cy.wait('@validates').then((interception) => {
      expect(interception.response.statusCode).to.eq(302)
    })
  });

  it('Gagal Login dengan Username kosong Password Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.blankUsername)
    LoginPage.inputPassword(DataMasuk.invalidPassword)
    LoginPage.interceptUserApi(DataMasuk.link5, 'validates')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert3)
    cy.wait('@validates').then((interception) => {
      expect(interception.response.statusCode).to.eq(302)
    })
  });

  it('Gagal Login dengan Password kosong dan Username Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(DataMasuk.validUsername)
    LoginPage.inputPassword(DataMasuk.blankPassword)
    LoginPage.interceptUserApi(DataMasuk.link5, 'validates')
    LoginPage.loginButton()
    LoginPage.AssertionLogin(DataMasuk.link2, DataMasuk.alert3)
    cy.wait('@validates').then((interception) => {
      expect(interception.response.statusCode).to.eq(302)
    })
  });

  it('Forget your Password?', () => {
    LoginPage.visit()
    LoginPage.forgetPassword()
    LoginPage.AssertionLogin(DataMasuk.link6, DataMasuk.alert4)
  });
});