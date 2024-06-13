 let array=[1,2,3,4,5];
 //  last element add useing push
 array.push(6); 
 console.log(array);

// last elemet remove useing pop
 array.pop();
 console.log(array);

// removes the first array element and "shifts" all other elements to a lower index.
 array.shift();
 console.log(array);

// method adds a new element to an array (at the beginning)
 array.unshift(8);
 console.log(array);

//  size = array.length();
//  console.log(array);

// using 2 aaray in one aarya
let a1=[1,2,3]
let a2=[4,5,6]
let a3=a1.concat(a2);

console.log(a1,a2,a3);

// use to two aaray in one array
let s=a3.join("@");
console.log(s);


a3.reverse();
console.log(a3);

console.log(a3.indexOf(74));


let arr1 = [1,2,3,4,5,6];
console.log(arr1.slice(2,5)); 

arr1.splice(2, 2);
console.log(arr1);

// arr1.splice(2,0,7,8)
// console.log(arr1);

// arr1.splice(3,3,9,10);
// console.log(arr1);