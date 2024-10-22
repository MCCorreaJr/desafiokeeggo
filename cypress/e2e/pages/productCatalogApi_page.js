
class ProductCatalogApi {

    searchProductApi(product) {
        return cy.request({
            method: 'GET',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${product}`,
        });
    }

} export default ProductCatalogApi