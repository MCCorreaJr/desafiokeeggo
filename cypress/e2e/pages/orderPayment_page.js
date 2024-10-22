import { ORDERPAYMENTELEMENTS } from "../elements/orderPayment_elements";

class OrderPayment {

    productCheckout() {
        cy.get(ORDERPAYMENTELEMENTS.buttons.btnCheckout).click() 
    }
    
    productCheckoutAssertion(productname) {
        cy.get('#product').should('be.visible');
    }
} export default OrderPayment