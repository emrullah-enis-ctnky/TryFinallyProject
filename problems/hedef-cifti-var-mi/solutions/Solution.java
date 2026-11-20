class Solution { public boolean hasPairSum(int[] nums, int target) { int l=0,r=nums.length-1;while(l<r){int s=nums[l]+nums[r];if(s==target)return true;if(s<target)l++;else r--;}return false; } }
