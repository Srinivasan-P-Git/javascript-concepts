//Implicit Binding
//Keyword this refers to the object in which the function is defined as property
//In this case, this refers to user object
let user = {
    name: "Pete",
    sing() {
        return `${this.name} is singing`;
    }
}

//Explicit Binding
let obj = {
    name: "Roger"
}
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
}
console.log(sayHi()); 