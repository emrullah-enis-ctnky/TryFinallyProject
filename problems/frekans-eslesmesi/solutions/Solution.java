class Solution { public int countOccurrences(int[] nums, int target) { int count = 0; for (int value : nums) if (value == target) count++; return count; } }
