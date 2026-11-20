class Solution:
    def minimumClimbCost(self, cost):
        two_back = one_back = 0
        for i in range(2, len(cost) + 1):
            two_back, one_back = one_back, min(one_back + cost[i - 1], two_back + cost[i - 2])
        return one_back
