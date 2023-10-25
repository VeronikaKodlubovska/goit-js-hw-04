function isEnoughCapacity(products, containerSize) {
    let totalSum = 0;
    for (const product in products) {
        totalSum += products[product];
    }
    return containerSize >= totalSum;
}


console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true