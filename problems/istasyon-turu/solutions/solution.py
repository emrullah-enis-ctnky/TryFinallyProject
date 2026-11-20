class Solution:
    def startStation(self, fuel, cost):
        total = tank = start = 0
        for i in range(len(fuel)):
            difference = fuel[i] - cost[i]; total += difference; tank += difference
            if tank < 0: start = i + 1; tank = 0
        return -1 if total < 0 else start
