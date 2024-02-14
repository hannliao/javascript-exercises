const palindromes = function (str) {
    // remove whitespace and punctuation, and convert all characters to lowercase
    let word = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "").toLowerCase();
    return word.split("").reverse().join("") == word;
};

// Do not edit below this line
module.exports = palindromes;
