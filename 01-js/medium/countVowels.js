/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

let vowels = ["a", "e", "i", "o", "u"]

function countVowels(str) {
  let  Count = 0
  let str1 = str.toLowerCase().split("")
  for(i = 0; i < str1.length; i++){
    let currentLetter = str1[i];
    if (vowels.includes(currentLetter)){
      Count = Count + 1
    }
  }
  return Count
}


module.exports = countVowels;