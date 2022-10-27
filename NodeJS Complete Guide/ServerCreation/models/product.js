const fs = require('fs');
const path = require('path');

const p = path.join(
    __dirname,
    '..',
    'data', 
    'products.json');

module.exports = class Product {
    constructor(tit) {
        this.title = tit;
        
    }

    save () {
        fs.readFile(p, (err, fileContent) => {
        console.log(fileContent);
        let products = [];
        if(!err) {
            products = JSON.parse(fileContent);
        };
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
            console.log('err');
        })
        });
    }

    static fetchAll(cb) {
        fs.readFile(p, (err, fileContent) => {
            if (err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}