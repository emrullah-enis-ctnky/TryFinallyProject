from collections import deque

class Solution:
    def countLandRegions(self, grid):
        if not grid or not grid[0]:
            return 0
        rows, cols = len(grid), len(grid[0])
        seen = [[False] * cols for _ in range(rows)]
        regions = 0
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] != 1 or seen[r][c]:
                    continue
                regions += 1
                seen[r][c] = True
                queue = deque([(r, c)])
                while queue:
                    row, col = queue.popleft()
                    for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                        nr, nc = row + dr, col + dc
                        if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1 and not seen[nr][nc]:
                            seen[nr][nc] = True
                            queue.append((nr, nc))
        return regions
