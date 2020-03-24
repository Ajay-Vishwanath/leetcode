//iterate through the input
//if we hit a 1 - check each neighbor of the current element we're on, and if it's a 1, change that to a different number
//recursively check these neighbors if it's a 1 to get all it's potential 1/island neighbors, and change them to a 2.
//when no 1 neighbors are left, we can get out of this recursive function.

var numIslands = function (grid) {

    if (!grid.length) return 0;

    let numberOfIslands = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            if (grid[row][column] === "1") {
                numberOfIslands += dfs(grid, row, column)
            }
        }
    }
    return numberOfIslands;
};

function dfs(grid, row, column) {
    if (row < 0 || row >= grid.length || column < 0 || column >= grid[row].length || grid[row][column] === "0") {
        return 0
    }

    grid[row][column] = "0";

    dfs(grid, row + 1, column);
    dfs(grid, row - 1, column);
    dfs(grid, row, column + 1);
    dfs(grid, row, column - 1);
    return 1
}



//example input = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]