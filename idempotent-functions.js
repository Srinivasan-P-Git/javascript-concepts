/**
 * @IdempotentFunctions
 * 1. Always gives same output for the same input
 * 2. Can produce Side Effects i.e., These functions can mutate the external state or interact with external world
 * 3. Useful for interacting with external state i.e., network requests and so on
 */

//Idempotent Function
let log = () => {
    console.log("Hi");
}
log(); //Always logs "Hi" to the console and interacts with 'window' object

//Idempotent Function
let changeText = text => {
    document.getElementById("name").innerText = text;
}
changeText("Name"); // For the same input it will always gives same output and interacts with external world