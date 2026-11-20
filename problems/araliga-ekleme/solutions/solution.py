class Solution:
    def insertInterval(self, intervals, added):
        result = []; i = 0
        while i < len(intervals) and intervals[i][1] < added[0]: result.append(intervals[i]); i += 1
        start, end = added
        while i < len(intervals) and intervals[i][0] <= end:
            start = min(start, intervals[i][0]); end = max(end, intervals[i][1]); i += 1
        result.append([start, end]); result.extend(intervals[i:])
        return result
