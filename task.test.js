const StringCalculator = require('./task');

describe('StringCalculator', () => {
    test('should return 0 for an empty string', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("")).toBe(0);
    });

    test('should return the sum for a string with multiple comma-separated numbers', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1,2,3")).toBe(6);
    });

    test('should return 1 for a string with a single number', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("1")).toBe(1);
    });

    test('should return the sum for a string with a custom delimiter', () => {
        const calculator = new StringCalculator();
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test('should throw an error for a string with negative numbers', () => {
        const calculator = new StringCalculator();
        expect(() => calculator.add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    });

    test('should throw an error listing all negative numbers', () => {
        const calculator = new StringCalculator();
        expect(() => calculator.add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
    });
});