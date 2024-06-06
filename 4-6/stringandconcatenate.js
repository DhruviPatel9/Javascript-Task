function concatenateStrings(a, b) {
    if (a.includes(b)) {
        return b + a;
    } else {
        return a + b;
    }
}

// Example usage
let result1 = concatenateStrings("dhruvi", "patel");
let result2 = concatenateStrings("hello", "everyone");

console.log(result1); 
console.log(result2); 
