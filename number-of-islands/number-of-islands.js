/**
 * @param {character[][]} grid
 * @return {number}
 */
// The time complexity of this solution is O(m * n), where m and n are the number of rows and columns in the grid, respectively. This is because we visit every cell in the grid at most once. The space complexity is O(min(m, n)), which is the maximum possible size of the queue.
//BFS 

var numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const ROWS = grid.length;
  const COLS = grid[0].length;
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; //(left, right, down, up)
  let numIslands = 0;

  function bfs(row, col) {
    const queue = [[row, col]];
    while (queue.length > 0) {
      const [r, c] = queue.shift();
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === '0') {
        continue;
      }
      grid[r][c] = '0'; // mark as visited
      for (const [dr, dc] of directions) {
        queue.push([r + dr, c + dc]);
      }
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === '1') {
        numIslands++;
        bfs(r, c);
      }
    }
  }

  return numIslands;   
};