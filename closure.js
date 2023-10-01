/**
 * @Closures
 * A function bundled together with references to its surrounding state(lexical environment).
 * Briefly, an inner function holding references to its surrounding state even the outer function goes out of execution context.
 * To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
 * @Uses
 * In object data privacy, event handlers, call back functions, partial applications, currying and so on
 * @Ref
 * https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
 */

/**
 * Case - 1
 * In the below example @delaySayHi will hold the @name even @sayHi pops out of stack
 */
let sayHi = (name) => {
  return () => {
    console.log(name);
  };
};
let delaySayHi = sayHi("Hi");
delaySayHi();

/**
 * Case - 2
 * IIFE sets up @count to zero and stored in closure
 * Then to increment @count one should call @addCount
 * There is no way to access @count except through @addCount invocation
 */
let addCount = (() => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
})();
addCount();

/**
 * Case - 3
 */
let arry = [1, 2, 3, 4];
for (let i = 0; i < arry.length; i++) {
  setTimeout(() => {
    console.log(i);
  }, 5000);
}
