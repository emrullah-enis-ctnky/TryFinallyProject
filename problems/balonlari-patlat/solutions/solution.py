class Solution:
    def minimumArrows(self, balloons):
        if not balloons:
            return 0
        arrows = 0
        position = 0
        for start, end in sorted(balloons, key=lambda interval: interval[1]):
            if arrows == 0 or start > position:
                arrows += 1
                position = end
        return arrows
