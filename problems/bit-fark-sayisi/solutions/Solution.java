class Solution { public int bitDifferenceCount(int a, int b) { int x=a^b,c=0;while(x!=0){c+=x&1;x>>>=1;}return c; } }
