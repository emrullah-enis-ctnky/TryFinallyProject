class Solution:
    def maxMeetings(self, meetings):
        ordered = sorted(meetings, key=lambda meeting: (meeting[1], meeting[0]))
        count = 0
        end_time = None
        for start, end in ordered:
            if end_time is None or start >= end_time:
                count += 1
                end_time = end
        return count
