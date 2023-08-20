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
/*function addProducts(array) {
    const productList = [];

    array.forEach(product => {
        if (!productList.includes(product)) {
            productList.push(product);
        };
    });

    return productList;
}
console.log(addProducts(["marker"]));
console.log(addProducts(products));*/

//c - blocaj
/*function removeProducts(array) {
    const productList = [];

    array.forEach(product => {
            productList.(product);
    });

    return productList;
}
console.log(removeProducts(["marker"]));
console.log(removeProducts(products));*/

//d
/*function groupByCategory(category) {
    let group = 0;

    products.forEach((product) => {
        if (product.category.includes(product)) {
            group++;
        }
    });

    return group;
}

console.log(groupByCategory("food"));*/

// e - blocaj
/*function groupByCountry(originCountry) {
    let group = 0;

    products.forEach((product) => {
        if (product.originCountry.includes(product)) {
            group++;
        }
    });

    return group;
}

console.log(groupByCountry("Romania"));*/

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
function findProducts(minPrice, maxPrice) {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}

console.log(findProducts(3, 10));






