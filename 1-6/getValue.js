//Write a function that takes a value as argument. Return the type of the value

function getType(value) {
    return typeof value;
}

// Example usage:
//console.log(getType(42));            // Output: "number"
// console.log(getType("hello"));       // Output: "string"
// console.log(getType(true));          // Output: "boolean"
// console.log(getType({}));            // Output: "object"
// console.log(getType([]));            // Output: "object"
// console.log(getType(null));          // Output: "object"
// console.log(getType(undefined));     // Output: "undefined"
// console.log(getType(function() {})); // Output: "function"
console.log(getType(Symbol()));      // Output: "symbol"
