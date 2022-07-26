/**
 * Case - 1
 * In the below example @delaySayHi will hold the @name even @sayHi pops out of stack
 */
let sayHi = (name) => {
    return () => {
        console.log(name);
    }
}
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
    }
})();
addCount();

/**
 * Case - 3
 */
let arry = [1,2,3,4];
for(let i = 0; i < arry.length; i++) {
    setTimeout(() => {
        console.log(i)
    }, 5000);
}




