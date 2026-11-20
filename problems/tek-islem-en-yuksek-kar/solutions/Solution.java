class Solution {
  public int maximumSingleTradeProfit(int[] prices) {
    int lowest = prices[0], best = 0;
    for (int price : prices) { best = Math.max(best, price - lowest); lowest = Math.min(lowest, price); }
    return best;
  }
}
