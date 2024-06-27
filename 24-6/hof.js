const powerTwo = (n) => {
    return n**2
}

function powerCube(powerTwo, n){
    return powerTwo(n) * n

}

//console.log(powerCube(powerTwo, 3));

function sayHello (){
    return () => {
        console.log("hello dhruvi");
    }
}
let guessValue = sayHello()
// console.log(guessValue);

// guessValue();

const higherOrder = n => {
    const oneFun = m =>{
        const twoFun = p =>{
            return n+m+p
        }
        return twoFun
    }
    return oneFun
}

// console.log(higherOrder (2) (3) (4));

const myNums = [2, 3, 4, 5]
const sumArray = Array =>{
    let total = 0
    Array.forEach(function(element)  {

        total += element 
        
    });
    return total
}

// console.log(sumArray(myNums));

function oneMoreHello () {
    console.log("hello Dhruuvi");
}

const gooal = setInterval(oneMoreHello,1000)

setTimeout(() => {
    clearInterval(gooal);
    console.log("Interval cleared");
}, 5000);
