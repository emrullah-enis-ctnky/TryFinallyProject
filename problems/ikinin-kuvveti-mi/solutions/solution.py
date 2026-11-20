class Solution:
    def isPowerOfTwo(self, size):
        return size > 0 and (size & (size - 1)) == 0
