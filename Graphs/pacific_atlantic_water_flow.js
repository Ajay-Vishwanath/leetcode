var pacificAtlantic = function (matrix) {

    if (matrix.length === 0) return [];

    const atlantic = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0))
    const pacific = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0))

    //top and bottom
    for (let col = 0; col < matrix[0].length; col++) {
        dfs(matrix, 0, col, Number.NEGATIVE_INFINITY, pacific);
        dfs(matrix, matrix.length - 1, col, Number.NEGATIVE_INFINITY, atlantic)
    }

    //left and right
    for (let row = 0; row < matrix.length; row++) {
        dfs(matrix, row, 0, Number.NEGATIVE_INFINITY, pacific);
        dfs(matrix, row, matrix[0].length - 1, Number.NEGATIVE_INFINITY, atlantic);
    }

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (pacific[i][j] === 1 && atlantic[i][j] === 1) {
                result.push([i, j])
            }
        }
    }

    return result;
};

var dfs = function (matrix, row, column, prevValue, ocean) {
    //out of bounds
    if (row < 0 || column < 0 || row > matrix.length - 1 || column > matrix[0].length - 1) {
        return;
    } else if (matrix[row][column] < prevValue) {
        return;
    } else if (ocean[row][column] == 1) {
        return;
    }

    ocean[row][column] = 1;

    dfs(matrix, row - 1, column, matrix[row][column], ocean)
    dfs(matrix, row + 1, column, matrix[row][column], ocean)
    dfs(matrix, row, column - 1, matrix[row][column], ocean)
    dfs(matrix, row, column + 1, matrix[row][column], ocean)
}