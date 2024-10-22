import { PRODUCTSEARCHELEMENTS, SEARCHPRODUCTELEMENTS } from "../elements/productSearch_elements"

class ProductSearch {

    productSearching(productname) {
        cy.get(PRODUCTSEARCHELEMENTS.buttons.btnSearch).click({force: true} )
        cy.wait(3000)
        cy.get(PRODUCTSEARCHELEMENTS.searchBar).type(productname).type('{enter}');
        cy.get(PRODUCTSEARCHELEMENTS.buttons.btnSearchBarX).click();
    }
    
    productSearchAssertion(productname) {
        cy.contains(productname).should('be.visible');
    }
} export default ProductSearch