var seedrandom = require('seedrandom');

function fight(fighterA, fighterB, rngSeed) {
    var rng = seedrandom(rngSeed);

    firstNumber = rng();
    secondNumber = rng();
    thirdNumber = rng();

    return(firstNumber);
}

module.exports = fight;