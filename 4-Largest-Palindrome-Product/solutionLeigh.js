/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const largestThreeDigitPalindromicNumber = () => {

  let largest = 0

  for (i = 999; i > 99; i--) {
    for (j = 999; j > 99; j--) {
      let currentProduct = i * j
      let rString = String(currentProduct).split('').reverse().join('')
      if (rString === String(currentProduct).split('').join('') && currentProduct > largest) {
        largest = currentProduct
      }
    }
  }
  return largest
}
