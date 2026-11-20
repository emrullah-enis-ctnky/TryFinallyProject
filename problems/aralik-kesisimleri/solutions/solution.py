class Solution:
    def intervalIntersections(self, first, second):
        result = []; i = j = 0
        while i < len(first) and j < len(second):
            left = max(first[i][0], second[j][0]); right = min(first[i][1], second[j][1])
            if left <= right: result.append([left, right])
            if first[i][1] < second[j][1]: i += 1
            else: j += 1
        return result
