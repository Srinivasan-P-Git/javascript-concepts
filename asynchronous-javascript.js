/**
 * @Promises
 * Promises are objects which represents the result that will be available some time in the near future
 * Promises make JavaScript code Asynchronous without blocking the main thread
 * These are a Part of the JavaScript
 * @Note - Async - Await is syntactic sugar for promises
 */

//Example - 1
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 3000)
});

promise.then(res => { console.log(res) });

//Example - 2
//fetch api returns promise that resolves to Response object
//Response.json() returns promise that resolves to the required json data
fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => { console.log("Users", data) });

//Example - 3
//Promise.all
//Resolves only when all the promises gets resolved
//Rejects if any one of the promises gets rejected
let urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments"
];
Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(results => {
    console.log("Fetch Users, Posts and Comments", results);
})

//Example - 4
//Promise.any
//Resolves if any one of the promise gets resolved and returns the result of the first promise that gets resolved
//Rejects only when all the promises gets rejected
let urls2 = [
    "https://jsonplaceholder.typicode.com/use", // Wrong User URL
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments"
];
Promise.any(urls2.map(url => fetch(url).then(res => res.json()))).then(result => {
    console.log("Promise any", result);
})

//Example - 5
//Promise.allSettled
//Resolves when all the promises are settled i.e., either resolved or rejected
Promise.allSettled(urls.map(url => fetch(url).then(res => res.json()))).then(results => {
    console.log("Promise.allSettled - 1", results);
});
Promise.allSettled(urls2.map(url => fetch(url).then(res => res.json()))).then(results => {
    console.log("Promise.allSettled - 2", results);
});

//Example - 6
//Promise.race
//Resolves the first promise that gets either resolved or rejected
Promise.race(urls.map(url => fetch(url).then(res => res.json()))).then(results => {
    console.log("Promise.race - 1", results);
});
Promise.race(urls2.map(url => fetch(url).then(res => res.json()))).then(results => {
    console.log("Promise.race - 2", results);
});
