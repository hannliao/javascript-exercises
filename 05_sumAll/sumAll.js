const sumAll = function(num1, num2) {
    // return ERROR for non-number parameters and negative numbers
    // solution: could do !Number.isInteger(num1) instead
    if (!(typeof num1 === "number") || !(typeof num2 === "number") || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    // disregard order of parameters
    let min, max;
    (num1 < num2) ? (min = num1, max = num2) : (min = num2, max = num1);

    // sum numbers in between start and end, inclusive
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
