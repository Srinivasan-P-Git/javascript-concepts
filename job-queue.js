console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

setTimeout(() => {
    console.log("3");
}, 300);

Promise.resolve("4").then(res => { console.log(res) });

console.log("5");

//Output
//1
//5
//4
//2
//3

