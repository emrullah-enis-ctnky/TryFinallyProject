class Solution:
    def secondLargest(self, nums):
        largest = second = None
        for value in nums:
            if largest is None or value > largest:
                if value != largest:
                    second = largest
                    largest = value
            elif value != largest and (second is None or value > second):
                second = value
        return second
