const operator = {
    "+": 1,
    "-": 1,
    "/": 2,
    "*": 2,
};

const parseUnary = (string) => {
    // N and P are substitutes for unary minus and unary plus respectively
    let parsedString = string
        .replace(/^\+/g, "P")
        .replace(/^-/g, "N")
        .replace(/\+\+/g, "+P")
        .replace(/\+-/g, "+N")
        .replace(/--/g, "-N")
        .replace(/-\+/g, "-P")
        .replace(/\*\+/g, "*P")
        .replace(/\*-/g, "*N")
        .replace(/\/\+/g, "/P")
        .replace(/\/-/, "/N");

    return parsedString;
};

const infixToPostfix = (string) => {
    let result = [];
    let stack = [];

    let updatedExpression = parseUnary(string);

    const hasHigherPrecedence = (op1, op2) => {
        return operator[op1] >= operator[op2];
    };

    const length = updatedExpression.length;

    for (let i = 0; i < length; i++) {
        let char = updatedExpression[i];

        if (operator[char]) {
            if (stack.length) {
                let topElement = stack[stack.length - 1];
                while (stack.length && hasHigherPrecedence(topElement, char)) {
                    result.push(stack.pop());
                    topElement = stack[stack.length - 1];
                }
            }
            stack.push(char);
        } else {
            let operand = "";
            let complete = true;
            while (complete && i <= length) {
                operand += updatedExpression[i];
                let nextChar = updatedExpression[i + 1];
                if (!nextChar || operator[nextChar]) {
                    complete = false;
                } else {
                    i++;
                }
            }

            result.push(operand);
        }
    }

    while (stack.length) {
        const item = stack.pop();
        result.push(item);
    }

    return result;
};

const operation = (operand1, operand2, operator) => {
    // N and P are substitutes for unary minus and unary plus respectively
    let op1 = +String(operand1).replace("P", "+").replace("N", "-");
    let op2 = +String(operand2).replace("P", "+").replace("N", "-");

    if (operator === "+") return op2 + op1;
    else if (operator === "-") return op2 - op1;
    else if (operator === "*") return op2 * op1;
    else if (operator === "/") return op2 / op1;
    else return INT_MIN;
};

const evaluatePostfix = (elements) => {
    const stack = [];

    if (elements.length <= 1) {
        return;
    }

    for (let ch of elements) {
        if (operator[ch]) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const result = operation(operand1, operand2, ch);
            stack.push(result);
        } else {
            stack.push(ch);
        }
    }
    return stack.pop();
};

console.log(evaluatePostfix(infixToPostfix(-8/2*3)));
