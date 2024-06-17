// create,rescusion,math,cloning,


let emp = {
    id: 1,
    name: "dhruvi",
    salary: "10000",
}

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

let seal = Object.seal(emp);
emp.id =2;
console.log(seal);




