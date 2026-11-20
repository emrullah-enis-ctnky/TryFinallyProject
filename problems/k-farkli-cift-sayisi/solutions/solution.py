class Solution:
    def countKDifferencePairs(self, nums, k):
        from collections import Counter
        frequency = Counter(nums)
        return sum(1 for value, count in frequency.items() if (count > 1 if k == 0 else value + k in frequency))
