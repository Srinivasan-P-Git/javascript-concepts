/**
 * @ExecutionContext
 * Consists of two phases
 * 1. @CreationPhase - Javascript engine does memory allocation for the variables and function declarations. Variables are declared but not initialised yet.
 * 2. @ExecutionPhase - Javascript engine executes the code line by line.
 *
 * @TypesOfExecutionContext
 * 1. @GolbalExecutionContext - Generally the 'window' object where the entire js file is running
 * 2. @FunctionalExecutionContext - This is specific to each and every function and will be created only when the function is invoked
 * 3. @EvalFunctionExecutionContext
 *
 * @Ref - https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0
 */

console.log(x);
// a();
// c(); -> This will throw error bcz function c is not defined in this context instead it is defined inside context function a
var x;
function a() {
  console.log("a");
  c();
  function c() {
    console.log("c");
    b();
  }
}

function b() {
  x = 100;
  console.log("b");
}
b();
console.log(x);

console.log(i); // This will log undefined bcz 'i' is hoisted to global execution context during the creation phase
console.log(j); // This will throw reference error bcz 'j' is hoisted within the functional execution context of 'w' but not hoisted to global execution context
var i;

function w() {
  console.log(j); // This will log undefined bcz 'j' is hoisted to the functional execution context of 'w'
  var j;
}

w();
