class Solution:
    def rangeQuerySums(self, nums, queries):
        prefix = [0]
        for value in nums: prefix.append(prefix[-1] + value)
        return [prefix[right + 1] - prefix[left] for left, right in queries]
