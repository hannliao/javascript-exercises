const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";

    let fib = [0, 1];
    for (let i = 1; i <= num; i++) {
        let next = fib[i-1] + fib[i];
        fib.push(next);
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
