const StringCalculator = require('./task');

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("")).toBe(0);
    });

    test('should return 6 for 1,2,3', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,2,3")).toBe(6);
    });
});