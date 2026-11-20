class Solution:
    def findMissingTicket(self, nums):
        missing = len(nums)
        for i, value in enumerate(nums):
            missing ^= i ^ value
        return missing
