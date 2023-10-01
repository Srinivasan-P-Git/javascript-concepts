//Implicit Binding
//Keyword this refers to the object in which the function is defined as property
//In this case, this refers to user object
let user = {
  name: "Pete",
  sing() {
    return `${this.name} is singing`;
  },
};

//Explicit Binding
let obj = {
  name: "Roger",
};
console.log(user.sing.bind(obj)());

//With new Keyword
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `${this.name} attacked with ${this.weapon}`;
  }
}
let classElf = new Elf("Pete", "Sword");

//With Arrow Functions
//this is lexically scoped
let sayHi = () => {
  return `Hi, I'm ${this.name}`;
};
console.log(sayHi());

//Javascript provides 'this' and 'arguments' objects to all function declarations(non-arrow functions) by default;
function a() {
  console.log(arguments.length); //Here arguments refer to function 'a'
}

a(10); //logs length - 1
a(10, 20, 30); //logs length - 3

const p = () => {
  console.log(arguments.length);
};

p(10, 20); // Will not log '2' since arrow functions will not have 'arguments' object provided by JS engine. And also 'arguments.length' will not throw any error but will log some finite value since the 'arguments' object is referred to 'window' object
