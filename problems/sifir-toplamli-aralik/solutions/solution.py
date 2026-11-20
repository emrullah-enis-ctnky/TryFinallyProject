class Solution:
    def hasZeroSumRange(self, nums):
        seen = {0}
        total = 0
        for value in nums:
            total += value
            if total in seen:
                return True
            seen.add(total)
        return False
