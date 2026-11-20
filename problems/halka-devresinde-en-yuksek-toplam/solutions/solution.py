class Solution:
    def maximumCircularLightValue(self, values):
        if len(values) == 1:
            return values[0]
        two_back = one_back = 0
        for value in values[:-1]:
            two_back, one_back = one_back, max(one_back, two_back + value)
        best = one_back
        two_back = one_back = 0
        for value in values[1:]:
            two_back, one_back = one_back, max(one_back, two_back + value)
        return max(best, one_back)
