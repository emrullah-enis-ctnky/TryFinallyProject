class Solution:
    def maxNonAdjacentSum(self, values):
        two_back = one_back = 0
        for value in values:
            two_back, one_back = one_back, max(one_back, two_back + value)
        return one_back
