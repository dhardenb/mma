var seedRandom = require('seedrandom');

test('When seedrandom is passed \'hello.\' it should return 0.9282578795792454', () => {
    var rng = seedRandom('hello.');
    expect(rng()).toBe(0.9282578795792454);
});