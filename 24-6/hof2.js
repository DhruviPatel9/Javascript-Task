// Using forEach with a function

let arr = [2, 3, 4]
arr.forEach(function(element, index, arr) 
    {
   // console.log(element, index, arr);
}
)

// Using forEach with an arrow function
arr.forEach((element, index, arr) =>
    {
        //console.log("arraw :",element, index, arr);
    } 
)

const movies = ["3 idtos", "super 30", "dhruva" ]

// Using forEach to print movie names in uppercase
movies.forEach((el) =>
{
    // console.log(el.toUpperCase());
});

arr.map(function (element, index, arr)
    {
        //console.log(element, index, arr);
    }
)
movies.map((h) => console.log(h.toUpperCase()));

// filter

//console.log(movies);
const moviesWithRRR = movies.filter((h) => {
    h.endsWith('RRR');
})
//console.log(moviesWithRRR);

// shopping cart
const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce(
    (prev, curr) => prev + curr, 0)
    //console.log(sumOfCartBill);

    const gameScore = [200, 310, 300, 250, 150]

// check if all value are numbers
   // console.log(typeof gameScore[1]);
        const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
        //console.log("check: ", gameScoreCheck);

// find all score above 200

const above200 = gameScore.find((score) => score > 200)
//console.log(above200);

// find large number 

const num = [5, 12, 8, 130, 44,50];
const isLargeNumber = (element) => element > 13;
//console.log(num.findIndex(isLargeNumber));

// find even

const aaa = [77];
const even = (element) => element % 2 === 0;
//console.log(aaa.some(even));

// sort

const months = ['dec', 'nov', 'sept', 'aug'];
months.sort();
// console.log(months);

const number = [5, 300, 22, 50000];
number.sort();
// console.log(number);