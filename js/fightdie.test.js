const rollFightDie = require('./fightdie.js');
const numberOfTestRolls = 10000;

test('rollFightDie should return expected results after 10,000 rolls: 16% 1s, 16% 2s, 32% 3s, 16% 4s, 16% 5s', () => {
    
    var one = 0;
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var other = 0;

    for (var i = 0; i < numberOfTestRolls; i++) {
        var testResult = rollFightDie();
        if (testResult == 1) {
            one++;
        } else if (testResult == 2) {
            two++;
        } else if (testResult == 3) {
            three++;
        } else if (testResult == 4) {
            four++;
        } else if (testResult == 5) {
            five++;
        } else {
            other++;
        }
    }

    var ratioOfOne = one / numberOfTestRolls;
    var ratioOfTwo = two / numberOfTestRolls;
    var ratioOfThree = three / numberOfTestRolls;
    var ratioOfFour = four / numberOfTestRolls;
    var ratioOfFive = five / numberOfTestRolls;

    expect(ratioOfOne).toBeGreaterThanOrEqual(.15);
    expect(ratioOfOne).toBeLessThan(.18);
    expect(ratioOfTwo).toBeGreaterThanOrEqual(.15);
    expect(ratioOfTwo).toBeLessThan(.18);
    expect(ratioOfThree).toBeGreaterThanOrEqual(.30);
    expect(ratioOfThree).toBeLessThan(.36);
    expect(ratioOfFour).toBeGreaterThanOrEqual(.15);
    expect(ratioOfFour).toBeLessThan(.18);
    expect(ratioOfFive).toBeGreaterThanOrEqual(.15);
    expect(ratioOfFive).toBeLessThan(.18);
    expect(other).toBe(0);
});