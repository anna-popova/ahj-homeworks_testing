import luhnAlgorithm from './luhn-algorithm';

test('expect true for American Express', () => {
   expect(luhnAlgorithm('371449635398431')).toBe(true);
});

test('expect false for American Express', () => {
   expect(luhnAlgorithm('371449635398432')).toBe(false);
});

test('expect true for Visa', () => {
   expect(luhnAlgorithm('4111111111111111')).toBe(true);
});

test('expect false for Visa', () => {
   expect(luhnAlgorithm('5111111111111111')).toBe(false);
});

