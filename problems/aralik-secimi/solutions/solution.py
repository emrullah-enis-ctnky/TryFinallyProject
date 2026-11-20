class Solution:
    def maxNonOverlappingIntervals(self, intervals):
        intervals.sort(key=lambda interval: interval[1]); count = 0; end = -float("inf")
        for start, finish in intervals:
            if start >= end: count += 1; end = finish
        return count
