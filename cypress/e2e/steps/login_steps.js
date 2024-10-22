import LoginPage from "../pages/login_page";
const loginPage = new LoginPage

Given(/^que eu esteja na página Advantage Online Shopping$/, () => {
	loginPage.accessHomePage();
});


When(/^eu realizo o login com minhas credenciais de "([^"]*)" e "([^"]*)"$/, (usuario,senha) => {
    loginPage.accessLogin(usuario, senha);
});


Then(/^tenho meu acesso realizado$/, () => {
	cy.get('#menuUserLink').contains('MCJR').should('be.visible');
});
