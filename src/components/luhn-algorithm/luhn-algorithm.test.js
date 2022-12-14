import luhnAlgorithm from './luhn-algorithm';

test('expect true', () => {
   expect(luhnAlgorithm('371449635398431')).toBe(true);
});

test('expect false', () => {
   expect(luhnAlgorithm('371449635398432')).toBe(false);
});

test('expect true', () => {
   expect(luhnAlgorithm('4111111111111111')).toBe(true);
});

test('expect false', () => {
   expect(luhnAlgorithm('5111111111111111')).toBe(false);
});

