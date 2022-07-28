let generatePromise = (name, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, delay);
    })
}

let promise = () => generatePromise("1", 100);
let promise2 = () => generatePromise("2", 3000);
let promise3 = () => generatePromise("3", 5000);

//Parallel Execution
Promise.all([promise(), promise2(), promise3()]).then(results => {
    console.log("Parallel", results);
});

//Sequential Execution
(async () => {
    let resp1 = await promise();
    let resp2 = await promise2();
    let resp3 = await promise3();
    console.log("Sequential", resp1, resp2, resp3);
})();

//Race Execution
Promise.race([promise(), promise2(), promise3()]).then(results => {
    console.log("Race", results);
});