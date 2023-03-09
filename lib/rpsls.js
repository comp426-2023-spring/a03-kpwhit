#!/usr/bin/env node
export function rps(player_shot) {
    if (!player_shot) {
        let game = {
            'player': 'rock'
        }
        return game;
    }
    const rules = {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
    }
    let options = Object.keys(rules);
    let game = {
        'player': `${player_shot}`,
        'opponent': `${options[Math.floor(Math.random() * options.length)]}`,
        'result': ''
    };
    if (!options.includes(game.player.toLowerCase())) {
        console.error("Rules for Rock Paper Scissors:\n\n        - Scissors CUTS Paper\n        - Paper COVERS Rock\n        - Rock CRUSHES Scissors")
    } else if (game.player == game.opponent) {
        game.result = 'tie';
    } else if (rules[game.player.toLowerCase()].includes(game.opponent)) {
        game.result = 'win';
    } else {
        game.result = 'lose';
    }
    return game;
}

export function rpsls(player_shot) {
    if (!player_shot) {
        let game = {
            'player': 'rock'
        }
        return game;
    }
    const rules = {
        "rock": ["scissors", "lizard"],
        "paper": ["rock", "spock"],
        "scissors": ["paper", "lizard"],
        "lizard": ["paper", "spock"],
        "spock": ["rock", "scissors"]
    }
    let options = Object.keys(rules);
    let game = {
        'player': `${player_shot.toLowerCase()}`,
        'opponent': `${options[Math.floor(Math.random() * options.length)]}`,
        'result': ''
    };
    if (!options.includes(game.player)) {
        console.error("Rules for the Lizard-Spock Espansion of Rock Paper Scissors:\n\n        - Scissors CUTS Paper\n        - Paper COVERS Rock\n        - Rock SMOOSHES Lizard\n        - Lizard POISONS Spock\n        - Spock SMASHES Scissors\n        - Scissors DECAPITATES Lizard\n        - Lizard EATS Paper\n        - Paper DISPROVES Spock\n        - Spock VAPORIZES Rock\n        - Rock CRUSHES Scissors")
        return "Invalid argument. Please provide one of the following: {'rock', 'paper', 'scissors', 'lizard', 'spock'}";
    } else if (game.player == game.opponent) {
        game.result = 'tie';
    } else if (rules[game.player].includes(game.opponent)) {
        game.result = 'win';
    } else {
        game.result = 'lose';
    }
    return game;
}