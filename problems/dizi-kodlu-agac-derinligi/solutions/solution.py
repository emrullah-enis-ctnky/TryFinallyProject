class Solution:
    def treeHeight(self, levelOrder):
        if not levelOrder or levelOrder[0] == -1:
            return 0
        stack = [(0, 1)]
        height = 0
        while stack:
            index, depth = stack.pop()
            height = max(height, depth)
            for child in (2 * index + 1, 2 * index + 2):
                if child < len(levelOrder) and levelOrder[child] != -1:
                    stack.append((child, depth + 1))
        return height
