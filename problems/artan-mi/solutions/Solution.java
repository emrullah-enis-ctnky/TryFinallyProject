class Solution { public boolean isStrictlyIncreasing(int[] nums) { for(int i=1;i<nums.length;i++) if(nums[i]<=nums[i-1]) return false; return true; } }
