// test.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('converts 1 dollar to yen', () => {
  expect(fromDollarToYen(1)).toBeCloseTo(146.26); // Using toBeCloseTo to compare floating point numbers
});

test('converts 1 yen to pound', () => {
  expect(fromYenToPound(1)).toBeCloseTo(0.0056); // Using toBeCloseTo to compare floating point numbers
});
