class Solution:
    def singleNumber(self, nums):
        answer = 0
        for value in nums:
            answer ^= value
        return answer
