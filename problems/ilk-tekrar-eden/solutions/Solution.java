class Solution { public int firstRepeated(int[] nums) { java.util.HashSet<Integer> seen=new java.util.HashSet<>();for(int x:nums){if(!seen.add(x))return x;}return -1; } }
