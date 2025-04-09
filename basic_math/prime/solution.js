class Solution {
  CheckPrimeNumber(n) {
    //1 -4
    // let isPrime = false;
    // for (let i = 2; i < n; i++) {
    //   if (n % i === 0) {
    //     return isPrime;
    //   } else {
    //     isPrime = true;
    //   }
    // }
    // console.log(isPrime);

    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count += 1;
      }
    }
    if (count === 2) {
      return true;
    } else {
      return false;
    }
  }
}
let n = 4;
/* Creating an instance of
          Solution class */
let sol = new Solution();

let result = sol.CheckPrimeNumber(n);
console.log(result);
