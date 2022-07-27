/**
 * @function - Compose
 * @description - Combines any number of functions supplied
 * Composition happens from Right to left
 */

let compose = (...fns) => (...args) => {
    fns.reverse();
    const [first, ...remainingFns] = fns;
    return remainingFns.reduce((result, currFn) => {
        return currFn(result);
    }, first(...args));
}

//Example 1 - Compose
let multiplyByThree = num => num * 3;
let absoluteNumber = num => Math.abs(num);

let multiplyByThreeAndAbsolute = compose(absoluteNumber, multiplyByThree);
console.log(multiplyByThreeAndAbsolute(-90));

//Example 2 - Compose
let user = {
    name: "Pete",
    cart: [],
    purchases: []
}
//Add an item to user cart - PURE FUNCTION
let addItemToCart = (user, item) => {
    const updatedCart = [...user.cart];
    updatedCart.push(item);
    return { ...user, cart: updatedCart };
}
//Add tax to items in the user cart - PURE FUNCTION
let addTax = user => {
    const updatedCart = user.cart.map(item => {
        item.price = 1.3 * item.price; //Assume tax to be 30%
        return item;
    });
    return { ...user, cart: updatedCart };
}
//Move items in cart to purchases - PURE FUNCTION
let buyItems = user => ({ ...user, purchases: [...user.cart] });
//Empty Cart - PURE FUNCTION
let emptyCart = user => ({ ...user, cart: [] });

let purchaseItem = compose(emptyCart, buyItems, addTax, addItemToCart);
console.log(purchaseItem(user, { name: "Mobile", price: 15000 }));

/**
 * @function - Pipe
 * @description - Combines any number of functions supplied
 * Composition happens from Left to Right
 */

let pipe = (...fns) => (...args) => {
    const [first, ...remainingFns] = fns;
    return remainingFns.reduce((result, currFn) => {
        return currFn(result);
    }, first(...args));
}

let addTwoNumbers = (num1, num2) => num1 + num2;
let checkEvenOrOdd = num => num % 2 === 0 ? true : false;
let allow = flag => flag ? "U R Allowed" : "U R Not Allowed";

let addAndCheckEven = pipe(addTwoNumbers, checkEvenOrOdd, allow);
console.log(addAndCheckEven(15, 18));