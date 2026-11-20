class Solution:
    def productsExceptSelf(self, nums):
        result = [1] * len(nums); product = 1
        for i, value in enumerate(nums): result[i] = product; product *= value
        product = 1
        for i in range(len(nums) - 1, -1, -1): result[i] *= product; product *= nums[i]
        return result
