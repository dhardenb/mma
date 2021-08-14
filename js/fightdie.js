function rollFightDie() {
    
    rollResult = Math.floor(Math.random() * 6 + 1);
    
    if (rollResult == 6) {
        rollResult = 3;
    }

    return(rollResult);
}

module.exports = rollFightDie;