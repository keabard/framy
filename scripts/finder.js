var S_LP = {'dmg': 30, 'stun': 70, 'range': 20};
var CR_LP = {'dmg': 30, 'stun': 70, 'range': 10};
var S_LK = {'dmg': 30, 'stun': 70, 'range': 20};
var CR_LK = {'dmg': 20, 'stun': 70, 'range': 15};

class Character {
    constructor(name, health, stun_bar) {
        this.name = name;
        this.health = health;
        this.stun_bar = stun_bar;
    }
}

class Move {
    constructor(name, character, damage, stun, range, input) {
        this.name = name;
        this.character = character;
        this.damage = damage;
        this.stun = stun;
        this.range = range;
        this.input = input;
    }
}

class ComboGuesser {
    constructor(character) {
        
    }
}

console.log(route.path('S LP', 'CR LK', {cost:true}));