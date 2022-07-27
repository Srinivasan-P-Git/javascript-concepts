/**
 * Curried Functions takes single parameter at a time and returns another function 
 * The result will be delivered only after all the necessary parameters are provided
 */

//Curried Multiply Function
let multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4));

/**
 * @GenericCurryFunction
 * This Generic Function is used to generate Curried Version of any Normal Function with any number of arguments
 */
let curry = fn => {
    return function curried(...args) {
        if (args.length === fn.length) return fn(...args);
        else {
            return curried.bind(null, ...args);
        }
    }
}

let add = (a, b, c) => a + b + c;
let curriedAdd = curry(add);
console.log(curriedAdd(3)(4)(5));
console.log(curriedAdd(10)(15)(20));

/**
 * @CurryFunction Application
 * Need to change all items price in @items to @newPrice 
 */
let changePrice = (price, item) => {
    item.price = price;
}

let items = [
    {
        name: 'Angels and Demons',
        price: 400
    },
    {
        name: "Crime and Punishment",
        price: 450
    },
    {
        name: "Meditations",
        price: 250
    }
];
let newPrice = 350;

//Naive Approach
for(let i = 0; i < items.length; i++) {
    changePrice(newPrice, items[i]);
}

//Using Curry Function Approach
let curriedChangePrice = curry(changePrice);
let changeItemToNewPrice = curriedChangePrice(newPrice);
for(let i = 0; i < items.length; i++) {
    changeItemToNewPrice(items[i]);
}