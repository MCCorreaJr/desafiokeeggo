import UpdateProductApiPage from "../pages/updateProductApi_page";
const updateProductApiPage = new UpdateProductApiPage();

Given(/^que eu deseje atualizar a imagem de um produto via API$/, () => {
  return true;
});

When(/^eu faço uma requisição para atualizar a imagem do produto com id "([^"]*)", userId "([^"]*)", source "([^"]*)" e color "([^"]*)"$/, (productId, userId, source, color) => {
  return updateProductApiPage.updateProductImage(productId, userId, source, color);
});

Then(/^a resposta deve ter um status code 200$/, () => {
  return updateProductApiPage.verifyStatusCode(200);
});

Then(/^a imagem do produto deve ser atualizada corretamente$/, () => {
  return updateProductApiPage.verifyImageUpdated();
});

Then(/^o id da nova imagem inserida deve ser "([^"]*)"$/, (expectedImageId) => {
  return updateProductApiPage.verifyNewImageId(expectedImageId);
});