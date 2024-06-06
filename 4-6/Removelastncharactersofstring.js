// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result

function removeLastThreeChars(a) {
    // Check if the string length is greater than 3
    if (a.length > 3) {
      // Remove the last three characters
      let result = a.slice(0, -3);
      return result;
    } else {
      // If the string is 3 characters or less, return an empty string
      return "";
    }
  }
  
  // Example usage:
  let inputString = "Hello, world!";
  let result = removeLastThreeChars(inputString);
  
  console.log(result); // Output: "Hello, wor"
  

//   The slice method is used with 0 as the start index and -3 as the end index to remove the last three characters.
// If the string length is 3 or less, it returns an empty string to handle such cases gracefully.