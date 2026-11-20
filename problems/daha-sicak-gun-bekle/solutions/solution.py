class Solution:
    def daysUntilWarmer(self, temperatures):
        answer = [0] * len(temperatures)
        stack = []
        for day, temperature in enumerate(temperatures):
            while stack and temperature > temperatures[stack[-1]]:
                previous = stack.pop()
                answer[previous] = day - previous
            stack.append(day)
        return answer
