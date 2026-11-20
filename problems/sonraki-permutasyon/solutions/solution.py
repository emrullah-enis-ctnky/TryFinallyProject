class Solution:
    def nextPermutation(self, nums):
        values = nums[:]
        i = len(values) - 2
        while i >= 0 and values[i] >= values[i + 1]: i -= 1
        if i >= 0:
            j = len(values) - 1
            while values[j] <= values[i]: j -= 1
            values[i], values[j] = values[j], values[i]
        values[i + 1:] = reversed(values[i + 1:])
        return values
