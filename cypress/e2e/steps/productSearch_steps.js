import ProductSearch from "../pages/productSearch_page";

const productSearch = new ProductSearch


When(/^eu realizo a busca do produto "([^"]*)"$/, (productname) => {
	productSearch.productSearching(productname);

});


Then(/^encontro o produto desejado "([^"]*)"$/, (productname) => {
	productSearch.productSearchAssertion(productname);

});


