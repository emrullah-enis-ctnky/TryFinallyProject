class Solution:
    def countTargetSubarrays(self, nums, target):
        from collections import defaultdict
        counts = defaultdict(int); counts[0] = 1; total = answer = 0
        for value in nums:
            total += value; answer += counts[total - target]; counts[total] += 1
        return answer
