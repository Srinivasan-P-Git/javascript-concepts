console.log(x);
// a();
// c(); -> This will throw error bcz function c is not defined in this context instead it is defined inside context function a
var x;
function a() {
  console.log('a');
  c();
  function c() {
    console.log('c');
    b();
  }
}

function b() {
    x = 100;
    console.log("b");
}
b();
console.log(x);
