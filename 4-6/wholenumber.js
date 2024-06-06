// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

function isWholeNumber(a) {
    return Number.isInteger(a);
}

// Example usage
console.log(isWholeNumber(5.55)); 
console.log(isWholeNumber(9)); 
