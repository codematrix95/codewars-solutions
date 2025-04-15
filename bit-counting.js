/* INSTRUCTIONS: 
Write a function that takes an integer as input, 
and returns the number of bits that are equal to one 
in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// SOLUTIONS:
// With type conversion
const countBitsVer1 = (n) => {
    let binary = n.toString(2);
    let amountOfOnes = 0;
    for (let i = 0; i < binary.length; i++) {
        amountOfOnes += Number(binary[i]);
    }
    return amountOfOnes;
};

countBitsVer1(1234);

// Without type conversion
const countBitsVer2 = (n) => {
    let count = 0;

    while (n > 0) {
        n % 2 === 1 ? count++ : false;
        n = Math.floor(n / 2);
    }

    return count;
};

countBitsVer2(1234);
