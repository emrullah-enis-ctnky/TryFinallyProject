class Solution { public int[] pascalRow(int rowIndex) { int[] r=new int[rowIndex+1];r[0]=1;for(int i=1;i<=rowIndex;i++)for(int j=i;j>=1;j--)r[j]+=r[j-1];return r; } }
