/**
 * @PartialFunctions
 * For First Time, Partial Functions expect few arguments 
 * And for the second call, It expects all the remaning arguments Unlike Currying Function
 */

let multiply = (a, b, c) => a * b* c;
let multiplyByTwo = multiply.bind(null, 2);
console.log(multiplyByTwo(5, 3));
console.log(multiplyByTwo(10, 8));