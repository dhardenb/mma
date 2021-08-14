const fight = require('./fight.js');

test('Given the same fighters and rng seed, the fight method should return the same result.', () => {

    randomSeed = Math.random();
    
    fighterA = {"name":"Joe", "strength":"3", "agility":"3"};
    fighterB = {"name":"Dan", "strength":"3", "agility":"3"};

    firstResult = fight(fighterA, fighterB, randomSeed.toString());
    secondResult = fight(fighterA, fighterB, randomSeed.toString());
    
    expect(firstResult).toBe(secondResult);
});