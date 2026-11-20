class Solution:
    def transpose(self, matrix):
        if not matrix: return []
        return [list(column) for column in zip(*matrix)]
