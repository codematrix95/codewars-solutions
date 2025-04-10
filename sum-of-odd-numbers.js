// INSTRUCTIONS:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8

const addRowOfOddNumbersTriangle = (oddNumbersTriangle, rows) => {
    let sum = 0;

    // Iterate through each number and add them to sum
    for (let i = 0; i < rows; i++) {
        sum += oddNumbersTriangle[rows - 1][i];
    }

    // empty array to ensure no memory usage since the data is no longer needed
    oddNumbersTriangle = [];

    return sum;
};

const createRows = (oddNumbersTriangle, rows) => {
    // the createRow array will represent our row
    let createRow = [];
    let count = 0;

    // if the oddNumbersTriangles length is less than the selected amount of rows create a row
    while (oddNumbersTriangle.length < rows) {
        // increment count until oddNumbersTriangle has the selected amount of rows
        count++;
        // check to see if count divided by 2 has a remainder if it does it's an odd number
        let isOddNumber = count % 2;
        // if isOddNumber does not have a remainder push count's current value to the createRow array
        if (isOddNumber !== 0) {
            createRow.push(count);
            // if the current rows length is greater by 1 than previous rows length push the createRow array to oddNumbersTriangle array
            if (createRow.length === oddNumbersTriangle.length + 1) {
                oddNumbersTriangle.push(createRow);
                // empty createRow array and continue making rows until we have the selected amount of rows
                createRow = [];
            }
        }
    }

    // call the addRowOfOddNumbersTriangle to add the odd numbers of the selected row
    addRowOfOddNumbersTriangle(oddNumbersTriangle, rows);
};

const rowSumOddNumbersVer1 = (rows) => {
    let oddNumbersTriangle = [];

    while (oddNumbersTriangle.length < rows) {
        createRows(oddNumbersTriangle, rows);
    }
};

rowSumOddNumbersVer1(42);

const rowSumOddNumbersVer2 = (rows) => {
    // if rows is equal to 1 or 0 we return rows
    if(rows === 0 || rows === 1) {
        return rows
    }

    // if neither of the previous conditions were met we intialize or row with a value of 1
    let row = [1];
    // because our initial value is 1 we start the count at 2 since we know 1 is an odd number
    let count = 2;
    // we create an empty array so that we can push the new odd numbers to it
    let createRow = [];

    // if the length of row is less than rows we will continue to run the loop
    // the amount of rows is equivalent to that rows length when working with prime numbers
    while (row.length < rows) {
        // increment the count to the next number
        count++;

        // if the number is odd we push it to the create row array
        let isOddNumber = count % 2;
        isOddNumber !== 0 ? createRow.push(count) : false;

        // if the createRow array length is greater than the row array by one we redeclare the row array to the value of the creatRow array
        if (createRow.length === row.length + 1) {
            row = createRow
            // we empty the creatRow array so that we can create a new row if the conditions of the while loop are not met
            createRow = [];
        }

        // if the row array is the same length of rows we perform the calculation of that row
        if(row.length === rows) {
            // or sum will have an initial value of zero
            let sum = 0

            // we will then iterate through each element of the row array and add them to the sum variable
            for (let i = 0; i < row.length; i++) {
                sum += row[i]
            }
        
            // empty array to ensure no memory usage since the data is no longer needed
            row = [];
            // we then return the sum for the total value of that row
            return sum;
        }
    }
};

rowSumOddNumbersVer2(42);

// This solution was not mine but it was something I was unaware about math and it is a very eloquent solution
const rowSumOddNumbersVer3 = (n) => {
    return Math.pow(n, 3);
}

rowSumOddNumbersVer3(42)
