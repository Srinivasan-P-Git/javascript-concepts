//Immediately Invoked Function Expression - IIFE

let iife = (function () {
  function a() {
    console.log("a from iife");
  }

  function b() {
    console.log("b from iife");
    this.a();
  }

  return {
    a: a,
    b: b,
  };
})();
