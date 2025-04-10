class Solution {
  PrintName(i, n) {
    if (i > n) return;
    console.log("jaga");
    this.PrintName(i + 1, n);
  }
}
let n = 5;
let sol = new Solution();
let result = sol.PrintName(1, n);
console.log(result);
