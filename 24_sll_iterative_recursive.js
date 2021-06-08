class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const reverseSLLIterative = sll => {
    let head = sll;
    let prev = null;
    let temp;

    while (head) {
        temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }

    return prev;
};

const reverseSLLRecursive = head => {
    if (!head || !head.next) {
        return head;
    }

    let temp = reverseSLLRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return temp;
};

const sll = new SLL();
sll.push(2).push(3).push(4).push(5);

console.log(sll);

console.log(reverseSLLIterative(sll.head));

console.log(reverseSLLRecursive(sll.head));
