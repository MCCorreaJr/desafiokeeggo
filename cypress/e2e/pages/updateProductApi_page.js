class UpdateProductImagePage {
    constructor() {
      this.response = null;
      this.newImageId = null; 
      this.authToken = null; 
    }
  
    authenticate(username, password) {
      const loginUrl = 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login';
      return cy.request({
        method: 'POST',
        url: loginUrl,
        body: {
          username: username,
          password: password,
        },
      }).then((response) => {
        
        this.authToken = response.body.token;
      });
    }
  
    updateProductImage(productId, userId, source, color) {
      const url = `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`;
      return cy.request({
        method: 'POST', 
        url: url,
        headers: {
          Authorization: `Bearer ${this.authToken}`, 
        },
        body: { productId }, 
      }).then((response) => {
        this.response = response;
        this.newImageId = response.body.imageId; 
      });
    }
  
    verifyStatusCode(expectedStatusCode) {
      expect(this.response.status).to.eq(expectedStatusCode);
    }
  
    verifyImageUpdated() {
      const productId = '25'; 
      return cy.request({
        method: 'GET',
        url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/${productId}`,
        headers: {
          Authorization: `Bearer ${this.authToken}`, 
        },
      }).then((response) => {
        const updatedProduct = response.body;
        expect(updatedProduct.imageId).to.eq(this.newImageId); 
      });
    }
  
    verifyNewImageId(expectedImageId) {
      expect(this.newImageId).to.eq(expectedImageId); 
    }
  }
  
  export default UpdateProductImagePage;