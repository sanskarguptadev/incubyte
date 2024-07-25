class StringCalculator {
    add(numbers) {
        if (numbers === "") {
            return 0;
        }
        let delimiter = /,/;
        const numberList = numbers.split(delimiter);
        let sumTotal = 0;

        for (let num of numberList) {
            if (num) {
                const number = parseInt(num);
                if (number < 0) {
                    negativeNumbers.push(number);
                }
                sumTotal += number;
            }
        }

        return sumTotal;
    }
}

//
const calculator = new StringCalculator();

console.log(calculator.add("")); // 0
console.log(calculator.add("1")); //1
console.log(calculator.add("1,2,3")); //6


module.exports = StringCalculator;
