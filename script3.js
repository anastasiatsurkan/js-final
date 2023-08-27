const products = [
    {
        name: "milk",
        category: "food",
        price: 12,
        originCountry: { name: "Moldova", code: "MD" },
    },
    {
        name: "scissors",
        category: "office supplies",
        price: 7,
        originCountry: { name: "China", code: "CN" },
    },
    {
        name: "butter",
        category: "food",
        price: 23,
        originCountry: { name: "Romania", code: "RO" },
    },
    {
        name: "eraser",
        category: "office supplies",
        price: 8,
        originCountry: { name: "China", code: "CN" },
    },
    {
        name: "yogurt",
        category: "food",
        price: 17,
        originCountry: { name: "Romania", code: "RO" },
    },
]




// a
/*products.forEach(product => {
    console.log(product.name);
});*/

//b
/*const addProduct = (product) => {
    products.push(product);
};

console.log(products);

addProduct({
    name: "marker",
    category: "supplies",
    price: 2,
    originCountry: { name: "China", code: "CN" },

});

console.log(products);*/

//c 
/*const getProductByName = (name) => {
    const productIndex = products.findIndex(product => product.name === name);

    if (productIndex !== -1) {
        products.splice(productIndex, 1);
    }
}; 

console.log(products.length);
getProductByName('milk');
console.log(products.length);*/


//d
/*const groupByCategory = (category) => {
    return products.filter(product => product.category === category);
};

console.log(groupByCategory('food'));*/

// e 
/*const groupByCountry = (country) => {
    return products.filter(product => product.originCountry.name === country);
};

console.log(groupByCountry('China'));*/

//f
/*function findMostExpensive() {
    let mostExpensive = products[0];

    products.forEach((product) => {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    });

    return mostExpensive;
}

console.log(findMostExpensive());*/

//g
/*function findTheCheapest() {
    let theCheapest = products[0];

    products.forEach((product) => {
        if (product.price < theCheapest.price) {
            theCheapest = product;
        }
    });

    return theCheapest;
}

console.log(findTheCheapest());*/

//h
/*function findProductsBetween(minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}

console.log(findProductsBetween(3, 10));*/






