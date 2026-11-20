class Solution {
  public int countCoinWays(int[] coins, int amount) {
    int[] ways = new int[amount + 1];
    ways[0] = 1;
    for (int coin : coins)
      for (int total = coin; total <= amount; total++)
        ways[total] += ways[total - coin];
    return ways[amount];
  }
}
