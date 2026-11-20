class Solution:
    def commonValues(self, first, second):
        return sorted(set(first) & set(second))
