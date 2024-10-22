import { expect } from "chai";
import ProductCatalogApi from "../pages/productCatalogApi_page";

const productCatalogApi = new ProductCatalogApi

Given(/^que eu deseje buscar um produto$/, () => {
	return true;
});

When(/^eu faço um arequisição para buscar o produto "([^"]*)"$/, (product) => {
	productCatalogApi.searchProductApi(product).then((response) => {
		cy.wrap(response).as('apiResponse');
	});
});


Then(/^a resposta deve conter o produto "([^"]*)"$/, (productName) => {
	cy.get('@apiResponse').then((response) => {
		expect(response.status).to.eq(200);
		const products = response.body[0].products;
		const productFound = products.find(product => product.productName === productName);
		expect(productFound).to.exist;
	});
})



