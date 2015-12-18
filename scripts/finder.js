'use strict';
var util        = require('util');
var _           = require('lodash');


class ComboGuesser {
    constructor(moves) {
        this.moves = moves;
        this.combos = [];
        this.initial_distance = 0;
    }

    guess() {
        var combo_tree = [];
        // Initialization: Build all combos which start with normal moves
        for(var normal_move of _.filter(this.moves, {type: 'normal'})){
            var combo = new Combo();
            combo.addMove(normal_move);
            combo_tree.push(combo);
        }
        // Discover tree and build combos
        while(_.filter(combo_tree, {terminated: false}).length > 0){
            // console.log(combo_tree[0]);
            var next_combo_tree = [];
            for(var combo of _.filter(combo_tree, {terminated: false})){
                var combo_is_over = true;
                for(var normal_move of _.filter(this.moves, {type: 'normal'})){
                    if(this.comboable(combo, normal_move)){
                        // Deep copy combo
                        var new_combo = combo.clone();
                        combo_is_over = false;
                        new_combo.addMove(normal_move);
                        next_combo_tree.push(new_combo);
                    }
                }
                if(combo_is_over){
                    combo.terminated = true;
                    this.combos.push(combo);
                }
            }
            combo_tree = next_combo_tree;
        }
        return this.combos;
    }

    comboable(combo, next_move) {
        // TODO: Add frame conditions
        if(combo.push_back <= next_move.range){
            // console.log(combo);
            // console.log('comboable');
            // console.log(next_move);
        }
        return combo.push_back <= next_move.range
    }
}

class Combo {
    constructor(){
        this.sequence = [];
        this.push_back = 0;
        this.dmg = 0;
        this.stun = 0;
        this.terminated = false;
    }

    addMove(move){
        this.sequence.push(move);
        this.push_back += move.push_back;
        // TODO: Add damage and stun scaling rules
        this.dmg += move.dmg;
        this.stun += move.stun;
    }

    clone(){
        var clone = new Combo();
        clone.sequence = _.cloneDeep(this.sequence);
        clone.push_back = this.push_back;
        clone.dmg = this.dmg;
        clone.stun = this.stun;
        clone.terminated = this.terminated;
        return clone
    }
}

var moves = [
    {name: 'S_LP', dmg: 30, stun: 70, range: 20, push_back: 5, type: 'normal'},
    {name: 'CR_LP', dmg: 30, stun: 70, range: 10, push_back: 5, type: 'normal'},
    {name: 'S_LK', dmg: 30, stun: 70, range: 20, push_back: 5, type: 'normal'},
    {name: 'CR_LK', dmg: 20, stun: 70, range: 15, push_back: 5, type: 'normal'}
];

var combo_guesser = new ComboGuesser(moves);
var combos = combo_guesser.guess();
for(var combo of combos){
    console.log(combo);
}