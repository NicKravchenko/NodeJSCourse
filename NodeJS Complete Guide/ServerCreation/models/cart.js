const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    // constructor() {
    //     this.products = [];
    //     this.totalPrice = 0;
    // }
    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent);
            }
            //analyze cart, find if product exists
            const existingProductIndex = cart.products.findIndex(
                prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            
            let updatedProduct;

            //Add new o increase quantiity
            if(existingProduct){
                updatedProduct = {...existingProduct};//cual es la diferencia?
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct];
            };
            cart.totalPrice = cart.totalPrice + +productPrice;
            
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        })
    }
}