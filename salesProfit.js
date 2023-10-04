let productProfitArray = [
    { product: 'Product A', profit: -100 },
    { product: 'Product B', profit: 100 },
    { product: 'Product C', profit: 50 },
    { product: 'Product D', profit: -25 },
    { product: 'Product E', profit: -25},
];

function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    let maxProfitProduct = productProfitArray.reduce((prev, current) => {
        return (prev.profit >= current.profit) ? prev : current;
    });

    return maxProfitProduct.product;
}

function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    let minProfitProduct = productProfitArray.reduce((prev, current) => {
        return (prev.profit <= current.profit) ? prev : current;
    });

    return minProfitProduct.product;
}

function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

  
    let sortedProducts = productProfitArray.slice().sort((a, b) => Math.abs(a.profit) - Math.abs(b.profit));

    
    let closestToZeroProduct = sortedProducts[0];

    return closestToZeroProduct.product;
}



console.log(topProduct(productProfitArray)); 
console.log(bottomProduct(productProfitArray)); 
console.log(zeroProfitProduct(productProfitArray));