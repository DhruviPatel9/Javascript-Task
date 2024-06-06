// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function countOccurrences(a, b) {
    // Using a regular expression with the global flag 'g' to find all occurrences of 'a' in 'b'
    let regex = new RegExp(a, 'g');
    let matches = b.match(regex);

    // Return the count of occurrences
    return matches ? matches.length : 0;
}

// Example usage
let count1 = countOccurrences("o", "hello world hello");
let count2 = countOccurrences("a", "pineapple apple banana apple");

console.log(count1); 
console.log(count2); 
