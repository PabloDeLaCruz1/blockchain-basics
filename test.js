let OP_ADD = (num1, num2) => {
    return num1 + num2
}
let OP_MUL = (num1, num2) => {
    return num1 * num2
}
let OP_EQUAL = (num1, num2) => {
    return num1 === num2
}

let num1 = 5
let num2 = 9

num1 = OP_ADD(num1, num2)
num2 = 2
num1 = OP_MUL(num1, num2)
num2 = 1
num1 = OP_ADD(num1, num2)
num2 = 11
console.log(OP_EQUAL(num1, num2));