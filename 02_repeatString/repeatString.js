const repeatString = function(word, timesToRepeat) {
    if (timesToRepeat < 0) return "ERROR";
    let repeated = "";
    for (let i = 0; i < timesToRepeat; i++) {
        repeated += word;
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;
