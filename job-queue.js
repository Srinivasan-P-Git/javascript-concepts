/**
 * @EventLoop - is a continuous process which synchronises call stack and call back queue(microtask queue and macrotask queue).
 * It pushes the task, if any available, from call back queue to the call stack whenever the call stack is empty.
 */

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

setTimeout(() => {
  Promise.resolve("3").then((res) => {
    console.log(res);
  });
  Promise.resolve("8").then((res) => {
    console.log(res);
  });
  console.log("7");
}, 200);

setTimeout(() => {
  Promise.resolve("9").then((res) => {
    console.log(res);
  });
  Promise.resolve("10").then((res) => {
    console.log(res);
  });
  console.log("6");
}, 200);

Promise.resolve("4").then((res) => {
  console.log(res);
});

console.log("5");

//Output
//1
//5
//4
//2
//7
//3
//8
//6
//9
//10
