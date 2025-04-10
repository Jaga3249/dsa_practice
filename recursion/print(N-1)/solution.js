class Solution {
  PrintNumber(i, n) {
    if (i > n) return;

    this.PrintNumber(i + 1, n);
    console.log(i);
  }
}
let n = 5;
let sol = new Solution();
let result = sol.PrintNumber(1, n);
console.log(result);
