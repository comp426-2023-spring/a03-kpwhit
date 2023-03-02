#!/usr/bin/env node
const rules = {
    "rock": ["scissors"],
    "paper": ["rock"],
    "scissors": ["paper"]
}

export function rps(player_shot) {
    let options = Object.keys(rules);
    let outcome;
    const opponent_shot = options[Math.floor(Math.random() * options.length)];
    if (player_shot == opponent_shot) {
        outcome = 'draw';
    } else if (rules[player_shot].includes(opponent_shot)) {
        outcome = 'win';
    } else {
        outcome = 'lose';
    }
    console.log(outcome);
}