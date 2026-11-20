class Solution:
    def bitDifferenceCount(self, a, b):
        return (a ^ b).bit_count()
