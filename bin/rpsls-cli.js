#!/usr/bin/env node
const rules = {
    "rock": ["scissors", "lizard"],
    "paper": ["rock", "spock"],
    "scissors": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["rock", "scissors"]

}

export function rpsls(player_shot) {
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
    return outcome;
}