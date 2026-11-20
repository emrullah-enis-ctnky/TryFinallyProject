class Solution:
    def existsInGrid(self, grid, word):
        rows, cols = len(grid), len(grid[0])
        used = [[False] * cols for _ in range(rows)]

        def search(row, col, index):
            if not (0 <= row < rows and 0 <= col < cols) or used[row][col] or grid[row][col] != word[index]:
                return False
            if index + 1 == len(word):
                return True
            used[row][col] = True
            found = (search(row + 1, col, index + 1) or search(row - 1, col, index + 1)
                     or search(row, col + 1, index + 1) or search(row, col - 1, index + 1))
            used[row][col] = False
            return found

        return any(search(r, c, 0) for r in range(rows) for c in range(cols))
