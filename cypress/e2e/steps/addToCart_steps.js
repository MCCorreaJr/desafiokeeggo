import AddToCart from "../pages/addToCart_page";

const addToCart = new AddToCart

When(/^adiciono o produto no carrinho$/, () => {
	addToCart.addProducttoCart();
});

Then(/^tenho o produto "([^"]*)" adicionado com sucesso no carrinho$/, (productname) => {
    addToCart.checkCart()
    cy.url().should('eq', 'https://advantageonlineshopping.com/#/shoppingCart');
    cy.contains(productname).should('be.visible')
});
