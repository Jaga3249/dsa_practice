// Input:N = 36
//Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

class Solution {
  AllDivisor(n) {
    let all_divisor = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        all_divisor.push(i);
      }
    }
    return all_divisor;
  }
}
let n = 36;
let sol = new Solution();
let result = sol.AllDivisor(n);
console.log(result);
