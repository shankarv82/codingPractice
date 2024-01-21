class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true) {
            if(current.value === val) return undefined;

            if (val < current.val) {
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
            
        }
    }

    bottomView() {
        const data = [];
        if(!this.root) {
            return data;
        }

        // DFS
        // If leaft node add to data array

        function dfs(node) {
            if(node.left) dfs(node.left);
            if (node.left === null && node.right === null) {
                data.push(node.val);
            }
            if(node.right) dfs(node.right)
        }
        dfs(this.root);
        console.log(data);
        return data;
    }
}

var tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.bottomView())
// Output: [3, 8, 20]
