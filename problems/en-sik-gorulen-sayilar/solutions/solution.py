class Solution:
    def topFrequentValues(self, values, k):
        counts = {}
        for value in values:
            counts[value] = counts.get(value, 0) + 1
        ordered = sorted(counts, key=lambda value: (-counts[value], value))
        return ordered[:k]
