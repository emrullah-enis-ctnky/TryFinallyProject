class Solution:
    def firstRepeated(self, nums):
        seen = set()
        for value in nums:
            if value in seen: return value
            seen.add(value)
        return -1
