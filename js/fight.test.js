const fight = require('./fight.js');

test('The first number should be 0.9282578795792454', () => {
    fighterA = {"name":"Joe", "strength":"3", "agility":"3"},
    fighterB = {"name":"Dan", "strength":"3", "agility":"3"},
    expect(fight(fighterA, fighterB, 'hello.')).toBe(0.9282578795792454);
});