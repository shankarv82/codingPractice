// Javascript program to count islands in boolean 2D matrix

// A function to check if a given cell (row, col) can be included in DFS
const isSafeAndNotVisited = (M, row, col, visited) => {
    // row number is in range, column number is in range and value is 1 and not yet visited
    return (
        row >= 0 &&
        row < ROW &&
        col >= 0 &&
        col < COL &&
        M[row][col] == 1 &&
        !visited[row][col]
    );
}

// A utility function to do DFS for a 2D boolean matrix. It only considers the 8 neighbors as adjacent vertices
const DFS = (M, row, col, visited) => {
    // These arrays are used to get row and column numbers of 8 neighbors of a given cell
    // [-1, -1] [-1, 0] [-1, 1]
    // [ 0, -1] [ 0, 0] [ 0, 1]
    // [ 1, -1] [ 1, 0] [ 1, 1]
    
    let rowNbr = [-1, -1, -1, 0, 0, 1, 1, 1];
    let colNbr = [-1, 0, 1, -1, 1, -1, 0, 1];

    // Mark this cell as visited
    visited[row][col] = true;

    // Recur for all connected neighbours
    for (let k = 0; k < 8; ++k) {
        if (isSafeAndNotVisited(M, row + rowNbr[k], col + colNbr[k], visited)) {
            DFS(M, row + rowNbr[k], col + colNbr[k], visited);
        }
    }
}

// The main function that returns count of islands in a given
// boolean 2D matrix
const countIslands = M => {
    // create an array marking all unvisited
    const visited = [];
    for (let i = 0; i < ROW; i++) {
        visited[i] = [];
        for (let j = 0; j < COL; j++) {
            visited[i].push(false);
        }
    }

    // Initialize count as 0 and travese through the all cells of given matrix
    let count = 0;
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (M[i][j] == 1 && !visited[i][j]) {
                // value 1 is not visited yet, then new island found, Visit all cells in this island and increment island count
                DFS(M, i, j, visited);
                count++;
            }
        }
    }
    return count;
}

// Driver method
let M = [
    [1, 1, 0, 0, 1],
    [0, 1, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1],
];

// No of rows and columns
const ROW = M.length;
const COL = M[0].length;

console.log("Number of islands is: " + countIslands(M));
