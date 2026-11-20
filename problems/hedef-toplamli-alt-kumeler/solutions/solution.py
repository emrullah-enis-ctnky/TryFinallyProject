class Solution:
    def countTargetSubsets(self, nums, target):
        stack = [(0, 0)]
        count = 0
        while stack:
            index, total = stack.pop()
            if index == len(nums):
                if total == target:
                    count += 1
                continue
            stack.append((index + 1, total))
            included = total + nums[index]
            if included <= target:
                stack.append((index + 1, included))
        return count
