const isParenthesisMatching = (str) => {
    let stack = [];
    let open = { 
        "{": "}", 
        "[": "]", 
        "(": ")" 
    };
    let closed = { 
        "}": true, 
        "]": true, 
        ")": true 
    };

    for (let char of str) {
        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) 
                return false;
        }
    }
    return stack.length === 0;
};
