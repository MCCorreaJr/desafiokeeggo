import { LOGINELEMENTS } from "../elements/login_elements"

const url = Cypress.config('baseUrl')


class LoginPage {

    accessHomePage() {
        cy.visit(url)
        cy.wait(3000)
    }

    accessLogin(username, password) {
        cy.get(LOGINELEMENTS.buttons.btnMenuUser).click();
        this.fillLogininfo(username, password);
        this.submitLogin();
    }

    fillLogininfo(username, password) {
        cy.get(LOGINELEMENTS.inputUsername).type(username)
        cy.get(LOGINELEMENTS.inputPassword).type(password)
    }

    submitLogin() {
        cy.get(LOGINELEMENTS.buttons.btnSignIn).click();
    }


} export default LoginPage