class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return `${this.name} attacked with ${this.weapon}`;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
    build() {
        return `${this.name} builds Houses`;
    }
}

let pete = new Elf("Pete", "Fire", "Elf");