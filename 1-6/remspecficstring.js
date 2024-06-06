// Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.

function removeElementsEqualTo(a, b) {
    return a.filter(element => element !== b);
}



console.log(removeElementsEqualTo([1, 2, 3, 4, 2], 2)); 


