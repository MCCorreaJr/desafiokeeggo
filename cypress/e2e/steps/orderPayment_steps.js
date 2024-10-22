import { ORDERPAYMENTELEMENTS } from "../elements/orderPayment_elements";
import OrderPayment from "../pages/orderPayment_page";
import AddToCart from "../pages/addToCart_page";

const addToCart = new AddToCart
const orderPayment = new OrderPayment


And(/^clico no botão checkout$/, () => {
    addToCart.checkCart();
    orderPayment.productCheckout();
});


Then(/^valido que o produto escolhido está visível$/, () => {
    orderPayment.productCheckoutAssertion()
});
