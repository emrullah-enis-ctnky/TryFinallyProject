class Solution:
    def minimumMeetingRooms(self, meetings):
        starts = sorted(start for start, _ in meetings)
        ends = sorted(end for _, end in meetings)
        active = best = end_index = 0
        for start in starts:
            while end_index < len(ends) and start >= ends[end_index]:
                active -= 1
                end_index += 1
            active += 1
            best = max(best, active)
        return best
