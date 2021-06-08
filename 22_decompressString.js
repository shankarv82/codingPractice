/* 
Input: 3[b2[ca]]
Output: bcacabcacabcaca 
*/

const isNumber = (char) => {
    return !Number.isNaN(+char);
};

const stringDecompress = (string) => {
    const numberStack = [];
    const charStack = [];
    const isClosingParenthesis = {
        "]": true,
    };
    const isOpenParenthesis = {
        "[": true,
    };

    let strLength = string.length;
    for (let i = 0; i < strLength; i++) {
        let char = string[i];
        // isNumber
        if (isNumber(char)) {
            numberStack.push(+char);
        } else {
            if (isClosingParenthesis[char]) {
                let isOpen = false;
                let temp = "";
                let result = "";
                let repeat = 0;
                while (!isOpen) {
                    let top = charStack.pop();
                    if (isOpenParenthesis[top]) {
                        isOpen = true;
                        repeat = numberStack.pop();
                    } else {
                        temp = top + temp;
                    }
                }

                while (repeat) {
                    result += temp;
                    repeat--;
                }

                if (result.length) {
                    for (let j = 0; j < result.length; j++) {
                        charStack.push(result[j]);
                    }
                }
            } else {
                charStack.push(char);
            }
        }

        // isNotNumber
    }

    return charStack.join("");
};

console.log(stringDecompress("3[b2[ca]]"));
