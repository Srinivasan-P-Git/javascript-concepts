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

//Example - Compose
let multiplyByThree = num => num * 3;
let absoluteNumber = num => Math.abs(num);

let multiplyByThreeAndAbsolute = compose(absoluteNumber, multiplyByThree);
console.log(multiplyByThreeAndAbsolute(-90));

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