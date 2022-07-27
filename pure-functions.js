/**
 * @PureFunctions
 * 1. Always gives same output for the same input
 * 2. No Side Effects i.e., These functions does not mutate the external state or interact with external world
 */

//PURE Function
let multiply = (num1, num2) => num1 * num2;
console.log(multiply(3, 4)); // ALways gives output 12 and not mutating any external state


//PURE Function
let a = [1, 2, 3];
let addTwo = arry => {
    return arry.map(item => item + 2);
}
console.log(addTwo(a)); // For [1, 2, 3] as input, the output will be always [3, 4, 5] and also It is not effecting the external state i.e., variable 'a'


//NOT a PURE Function
let log = () => {
    console.log("Hi");
}
log(); //Although the output is same for same input but here the function is interacting with external world. In this case it is 'window' object

//NOT a PURE Function
let x = [5, 6, 7];
let pop = arry => {
    arry.pop();
    return arry;
}
//Although the output is same for same input but here the function is mutating the external state. In this case it is 'x' variable
console.log(pop(x));
console.log(x); 