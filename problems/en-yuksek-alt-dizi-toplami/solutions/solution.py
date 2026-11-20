class Solution:
    def maximumSubarraySum(self, changes):
        ending = best = changes[0]
        for value in changes[1:]:
            ending = max(value, ending + value)
            best = max(best, ending)
        return best
