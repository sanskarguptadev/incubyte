class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n", 2);
            delimiter = new RegExp(parts[0].slice(2));
            numbers = parts[1];
        }

        const numberList = numbers.split(delimiter);
        let sumTotal = 0;
        let negativeNumbers = [];

        for (let num of numberList) {
            if (num) {
                const number = parseInt(num);
                if (number < 0) {
                    negativeNumbers.push(number);
                }
                sumTotal += number;
            }
        }

        if (negativeNumbers.length > 0) {
            throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
        }

        return sumTotal;
    }
}

//
const calculator = new StringCalculator();

console.log(calculator.add("")); // 0
console.log(calculator.add("1")); //1
console.log(calculator.add("1,2,3")); //6
console.log(calculator.add("//;\n1;2")); //3

try {
    console.log(calculator.add("1,-2,3")); // Error: negative numbers not allowed: -2
} catch (e) {
    console.error(e.message);
}


module.exports = StringCalculator;
