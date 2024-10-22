import { ADDTOCARTELEMENTS } from "../elements/addToCart_elements"


class AddToCart{
    addProducttoCart(){
        cy.get(ADDTOCARTELEMENTS.buttons.btnPopupX).click()
        cy.get(ADDTOCARTELEMENTS.productfound).click({force: true})
        cy.get(ADDTOCARTELEMENTS.buttons.btnAddToCart).click()
    }

    checkCart(){
        cy.get(ADDTOCARTELEMENTS.buttons.btnMenuCart).click()
    }




}export default AddToCart