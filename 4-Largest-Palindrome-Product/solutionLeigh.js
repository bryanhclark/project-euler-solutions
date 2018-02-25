/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestThreeDigitPalindromicNumber() {
// start by checking with the largest 3 digit numbers and going down

  let largest = 0

  for (i = 999; i > 99; i--) {
    for (j=999; j > 99; j--) {
      let currentProduct = i * j
      let string = '' * currentProduct
      if (isPalindrome(currentProduct) && currentProduct > largest) {
        largest = currentProduct
      }
    }
  }
  return largest
}


// check if palindrome helper function
function isPalindrome(num) {
  let numString = String(num).split('').join('')
  let reverse = String(num).split('').reverse().join('')

return numString === reverse

}
console.log(largestThreeDigitPalindromicNumber())
