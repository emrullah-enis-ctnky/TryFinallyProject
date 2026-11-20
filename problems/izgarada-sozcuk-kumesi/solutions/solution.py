class Solution:
    def findGridWords(self, grid, words):
        children = [[-1] * 26]
        terminal = [-1]
        for word_id, word in enumerate(words):
            node = 0
            for letter in word:
                index = ord(letter) - ord("A")
                if children[node][index] == -1:
                    children[node][index] = len(children)
                    children.append([-1] * 26)
                    terminal.append(-1)
                node = children[node][index]
            terminal[node] = word_id
        rows, cols = len(grid), len(grid[0])
        used = [[False] * cols for _ in range(rows)]
        found = [False] * len(words)

        def search(row, col, node):
            if not (0 <= row < rows and 0 <= col < cols) or used[row][col]:
                return
            next_node = children[node][ord(grid[row][col]) - ord("A")]
            if next_node == -1:
                return
            if terminal[next_node] != -1:
                found[terminal[next_node]] = True
            used[row][col] = True
            search(row + 1, col, next_node)
            search(row - 1, col, next_node)
            search(row, col + 1, next_node)
            search(row, col - 1, next_node)
            used[row][col] = False

        for row in range(rows):
            for col in range(cols):
                search(row, col, 0)
        return sorted(words[i] for i, present in enumerate(found) if present)
