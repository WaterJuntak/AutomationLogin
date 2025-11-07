import LoginPage from "../../support/LoginClass.js"
import LoginData from '../../fixtures/LoginData.json'

describe('Login Test', () => {
  it('Berhasil login dengan kredensial yang valid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.validUsername)
    LoginPage.inputPassword(LoginData.validPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link1)
  });

  it('Gagal Login dengan Username dan Password kosong', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.blankUsername)
    LoginPage.inputPassword(LoginData.blankPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

  it('Gagal Login dengan Username Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.invalidUsername)
    LoginPage.inputPassword(LoginData.validPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

  it('Gagal Login dengan Password Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.validUsername)
    LoginPage.inputPassword(LoginData.invalidPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

  it('Gagal Login dengan Username dan Password Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.invalidUsername)
    LoginPage.inputPassword(LoginData.invalidPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

  it('Gagal Login dengan Username kosong', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.blankUsername)
    LoginPage.inputPassword(LoginData.validPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

  it('Gagal Login dengan Password kosong', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.validUsername)
    LoginPage.inputPassword(LoginData.blankPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

  it('Gagal Login dengan Username kosong Password Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.blankUsername)
    LoginPage.inputPassword(LoginData.invalidPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

  it('Gagal Login dengan Password kosong dan Username Invalid', () => {
    LoginPage.visit()
    LoginPage.inputUsername(LoginData.validUsername)
    LoginPage.inputPassword(LoginData.blankPassword)
    LoginPage.loginButton()
    LoginPage.AssertionLogin(LoginData.link2)
  });

});