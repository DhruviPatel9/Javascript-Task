let pattern = 'pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'
let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi

const strToCheck = "PW is growing.Pw is a good..pW is a nice....pw"

const result = regExThree.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);

const webUrl = "https://google.com/dhruvi20%patel"
const useableUrl = webUrl.replace(/%d0/,'-')
console.log(useableUrl);