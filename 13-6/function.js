function greet(){
    console.log("hii");
    console.log("how are you");
}

greet();// calling function

function sqr(x){ // x parameter
    // console.log(x*x);
    return x*x;
}

let a= sqr(8); // 8 argument
console.log(a);


function passmessage(){
    console.log("hello");
}
 passmessage();
 passmessage();

 function passmess1(){
    return "how r u";
 }
  
 let message = passmess1();
 let newmessage = message + " enroll no";
 console.log(newmessage);
