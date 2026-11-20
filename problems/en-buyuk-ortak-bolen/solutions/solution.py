class Solution:
    def greatestCommonDivisor(self, a, b):
        return a if b == 0 else self.greatestCommonDivisor(b, a % b)
