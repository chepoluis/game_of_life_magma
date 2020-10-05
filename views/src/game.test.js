const ruleOneTwo = require('../test/rulesOneTwo');
const ruleThree = require('../test/ruleThree');
const ruleFour = require('../test/ruleFour');

test('Check if the rule 1 and 2, it is working properly', () => {
    expect(ruleOneTwo(1)).toBe(0);
});

test('Check if the rule 3, it is working properly', () => {
  expect(ruleThree(1, 2)).toBe(1);
});

test('Check if the rule 4, it is working properly', () => {
    expect(ruleFour(0, 3)).toBe(1);
  });