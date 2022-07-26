/**
 * Creating Prototypal Inheritance using Class based Syntactic Sugar
 */
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

/**
 *  Creating Prototypal Inheritance using Constructor Function Approach
 */
function Elf2(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return `${this.name} attacked with ${this.weapon}`;
}
let functionElf = new Elf2("Pete", "Sword");

/**
 * Creating Prototypal Inheritance using @FactoryFunction i.e., Object.create approach
 */
let elfPrototype = {
    attack() {
        return `${this.name} attacked with ${this.weapon}`;
    }
}
let e = Object.create(elfPrototype);
e.name = "Pete";
e.weapon = "Fire";