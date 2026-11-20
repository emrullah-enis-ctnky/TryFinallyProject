class Solution { public int[] withoutTarget(int[] nums, int target) { int n=0;for(int x:nums)if(x!=target)n++;int[] r=new int[n];int i=0;for(int x:nums)if(x!=target)r[i++]=x;return r; } }
