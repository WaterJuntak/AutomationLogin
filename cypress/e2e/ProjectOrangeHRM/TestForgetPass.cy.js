import ForgetPage from "../../support/ForgetClass.js"
import ForgetData from '../../fixtures/ForgetData.json'

describe('Forget Password Test', () => {
  it('Berhasil Reset Password dengan username valid', () => {
    ForgetPage.visit()
    ForgetPage.inputUsername(ForgetData.validUsername)
    ForgetPage.interceptUserApi(ForgetData.link4, 'message')
    ForgetPage.resetButton()
    ForgetPage.AssertionForget(ForgetData.link3, ForgetData.alert3)
    cy.wait('@message').then((interception) => {
      expect(interception.response.statusCode).to.eq(304)
    })
  });

  it('Berhasil Reset Password dengan username invalid, harusnya user tidak ditemukan', () => {
    ForgetPage.visit()
    ForgetPage.inputUsername(ForgetData.invalidUsername)
    ForgetPage.interceptUserApi(ForgetData.link4, 'message')
    ForgetPage.resetButton()
    ForgetPage.AssertionForget(ForgetData.link3, ForgetData.alert3)
    cy.wait('@message').then((interception) => {
      expect(interception.response.statusCode).to.eq(304)
    })
  });

  it('Tidak Berhasil dengan Username Kosong', () => {
    ForgetPage.visit()
    ForgetPage.inputUsername(ForgetData.blankUsername)
    ForgetPage.interceptUserApi(ForgetData.link5, 'message')
    ForgetPage.resetButton()
    ForgetPage.AssertionForget(ForgetData.link2, ForgetData.alert2)
    cy.wait('@message').then((interception) => {
      expect(interception.response.statusCode).to.eq(200)
    })
  });

  it('Cancel', () => {
    ForgetPage.visit()
    ForgetPage.cancelButton()
    ForgetPage.AssertionForget(ForgetData.link1, ForgetData.alert1)
  });
});