

let str = "hello world!"

// length of a string.
  console.log(str.length);  

 // access characters in a string using bracket notation or the charAt method.
console.log(str.charAt(1)); 

// Converts the entire string to uppercase.
 console.log(str.toUpperCase()); 
 
//  Converts the entire string to lowercase.
 console.log(str.toLowerCase()); 

//  Extracts a part of a string and returns it as a new string.
 console.log(str.slice(0, 5));  

//  Similar to slice but does not accept negative indices.
 console.log(str.substring(0, 5));
 
//  Extracts a part of a string, starting from a specified position and a specified number of characters
 console.log(str.substr(0,5)); 
 
 
//  Returns the position of the first occurrence of a specified value.
  console.log(str.indexOf("world"));

// Returns the position of the last occurrence of a specified value.
 console.log(str.lastIndexOf("o"));

//  Checks if a string contains a specified substring.
 console.log(str.includes("world"));

//  Checks if a string starts with a specified substring.
 console.log(str.startsWith("h")); 

//  Checks if a string ends with a specified substring.
 console.log(str.endsWith("!")); 

//  Replaces a specified value with another value in a string.
console.log(str.replace("world", "javascript"));
 

// Removes whitespace from both ends of a string.
let strWithOne = " dhruvi "
console.log(strWithOne);
console.log(strWithOne.trim());

const url = "https://dhruvi.com/dhruvi%20patel"
console.log(url.replace('%20','-'));

