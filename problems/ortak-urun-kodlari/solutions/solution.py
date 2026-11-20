class Solution:
    def sharedProductCodes(self, first, second):
        return sorted(set(first) & set(second))
