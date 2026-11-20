class Solution:
    def countTargetRanges(self, values, target):
        seen = {0: 1}
        prefix = result = 0
        for value in values:
            prefix += value
            result += seen.get(prefix - target, 0)
            seen[prefix] = seen.get(prefix, 0) + 1
        return result
