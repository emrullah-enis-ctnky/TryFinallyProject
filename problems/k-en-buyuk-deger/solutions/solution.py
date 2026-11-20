import heapq

class Solution:
    def kthLargest(self, nums, k):
        smallest_of_largest = nums[:k]
        heapq.heapify(smallest_of_largest)
        for value in nums[k:]:
            if value > smallest_of_largest[0]:
                heapq.heapreplace(smallest_of_largest, value)
        return smallest_of_largest[0]
