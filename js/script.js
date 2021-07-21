let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

let operate = (a, b, operator) => {
    switch (operator) {
        case '+':
            operator = add(a, b);
            break;
        case '-':
            operator = subtract(a, b);
            break;
        case '*':
            operator = multiply(a, b);
            break;
        case '/':
            operator = divide(a, b);
            break;
    }
}
console.log(add(2, 2));
console.log(subtract(2, 5));
console.log(multiply(2, 8));
console.log(divide(5, 2));
console.log(operate(4, 6, '+'));