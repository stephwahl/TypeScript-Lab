"use strict";
// An interface is an outline or blueprint for creating object
// contains object's properties, data type, and methods inside curly braces
// Declare an array called mountains which is an array of type Mountain.
// Fill the array with the following mountains:
const mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
// Declare a function called findNameOfTallestMountain. It takes one parameter, an array of Mountain objects.
// It returns a string, the name of the tallest mountain in the given array. 
// If the array argument is empty, return an empty string ("").
function findNameOfTallestMountain(mtns) {
    let nameOfTallestMountain = "";
    let tallestHeight = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}
// Call findNameOfTallestMountain, passing it your mountains array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It will print “Everest”.)
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
// Declare an array called products which is an array of type Product.
// Fill the array with a few products of your own choosing.
const products = [
    { name: "Columbia Winter Boot", price: 157.85 },
    { name: "Ugg Boot", price: 249.95 },
    { name: "Muck Boot", price: 180.00 }
];
// Declare a function called calcAverageProductPrice. It takes one parameter, an array of Product objects.
// It returns a number, the average price of all the products provided as an argument.
// If the array argument is empty, return 0.
function calcAverageProductPrice(products) {
    let total = 0;
    let priceCount = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
        priceCount++;
    }
    if (priceCount == 0) {
        return 0;
    }
    let averagePrice = total / products.length;
    return averagePrice;
}
// Call calcAverageProductPrice, passing it your products array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log the variable.
let average = calcAverageProductPrice(products);
console.log(average);
// Declare an array called inventory which is an array of type InventoryItem.
// Fill the array with the following information.
const inventory = [
    { name: 'motor', price: 10.00, quantity: 10 },
    { name: 'sensor', price: 12.50, quantity: 4 },
    { name: 'LED', price: 1.00, quantity: 20 }
];
// Declare a function called calcInventoryValue. It takes one parameter, an array of InventoryItem objects. 
// It returns a number, the total value of all the products in the inventory array provided as an argument.
// If the array argument is empty, return 0.
// ○ This is calculated as follows: For each InventoryItem take the product price times
// the quantity. Add these together for all the items. For the above data, the total
// will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.
function calcInventoryValue(items) {
    let total = 0;
    let itemCount = 0;
    for (const item of items) {
        total += item.price * item.quantity;
        itemCount++;
    }
    if (itemCount == 0) {
        return 0;
    }
    return total;
}
// Call calcInventoryValue, passing it your inventory array as an argument.
// Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It prints 170)
let inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
