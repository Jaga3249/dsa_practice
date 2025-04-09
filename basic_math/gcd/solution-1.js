// Input:N = 36
//Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

class Solution {
  FindGcd(n1, n2) {
    //12,6
    // let gcd = 1;
    // for (let i = 1; i <= Math.min(n1, n2); i++) {
    //   if (n1 % i === 0 && n2 % i === 0) {
    //     gcd = i;
    //   }
    // }
    // return gcd;
    let n1Divisors = [];
    let n2Divisors = [];
    for (let i = 1; i <= Math.sqrt(n1); i++) {
      if (n1 % i === 0) {
        n1Divisors.push(i);
        if (n1 / i !== i) {
          n1Divisors.push(n1 / i);
        }
      }
    }
    for (let i = 1; i <= Math.sqrt(n2); i++) {
      if (n1 % i === 0) {
        n2Divisors.push(i);
        if (n1 / i !== i) {
          n2Divisors.push(n2 / i);
        }
      }
    }

    let gcd = 1;
    for (let i = 0; i <= n1Divisors.length - 1; i++) {
      if (n2Divisors.includes(n1Divisors[i])) {
        if (n1Divisors[i] > gcd) {
          gcd = n1Divisors[i];
        }
      }
    }
    return gcd;
  }
}
let n1 = 9;
let n2 = 12;
let sol = new Solution();
let result = sol.FindGcd(n1, n2);
console.log(result);
