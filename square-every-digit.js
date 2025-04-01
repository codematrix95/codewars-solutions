/*
INSTRUCTIONS:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
Note: The function accepts an integer and returns an integer.
Happy Coding!
*/

// SOLUTIONS:

// With type conversion
const squareDigits = (num) => {
    num = Array.from(String(num));

    for (let i = 0; i < num.length; i++) {
        num[i] = num[i] ** 2;
    }

    num = Number(num.join(''));

    return num;
};

squareDigits(9104);

// Without type conversion
const squareDigitWithoutTypeConversion = (num) => {
    let digits = [];

    while (num > 0) {
        let remainder = num % 10;
        digits.unshift(remainder ** 2);
        num = Math.floor(num / 10);
    }

    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        let e = digits[i];
        let placeholder = i + 1;
        let power = digits.length - placeholder;
        let multiplier = Math.pow(10, power);
        let product = e * multiplier;

        e < 10 ? (sum += product) : (sum = sum * 10 + product);
    }
    
    return sum
};

squareDigitWithoutTypeConversion(9104);

// Without type conversion
const doStuff = (num) => {
    let squared = [];
    let length = Math.ceil(Math.log10(num + 1));

    while (length > 0) {
        length--;

        let a = Math.pow(10, length);
        let b = Math.floor(num / a) ** 2;

        if (b < 10) {
            squared.push(b);
        } else {
            squared.push(Math.floor(b / 10));
            squared.push(b % 10);
        }

        num = num % a;
    }

    let power = squared.length;
    for (let i = 0; i < squared.length; i++) {
        power--;
        let multiplier = squared[i] * Math.pow(10, power);
        num = num + multiplier;
    }

    squared = []
    return num
};

doStuff(9104);

// Review