class Solution {
  PrintSum(n) {
    if (n === 0) {
      return 0;
    }
    return n + this.PrintSum(n - 1);
  }
}
let n = 5;
let sol = new Solution();
let result = sol.PrintSum(n);
console.log(result);
