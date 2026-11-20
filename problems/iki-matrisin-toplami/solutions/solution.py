class Solution:
    def addMatrices(self, a, b):
        return [[x + y for x, y in zip(row_a, row_b)] for row_a, row_b in zip(a, b)]
