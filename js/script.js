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
    let answer = 0;
    switch (operator) {
        case '+':
            answer = add(a, b);
            return answer;
        case '-':
            answer = subtract(a, b);
            return answer;
        case '*':
           answer = multiply(a, b);
            return answer;
        case '/':
            answer = divide(a, b);
            return answer;
    }
}
