var seedRandom = require('seedrandom');

function fight(fighterA, fighterB, rngSeed) {
    var rng = seedRandom(rngSeed);

    firstNumber = rng();
    secondNumber = rng();
    thirdNumber = rng();

    return(firstNumber);
}

module.exports = fight;