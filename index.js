function isPalindrome(word) {
  for (let i = 0; i < word.length/2; i++) {
    if (word[i] != word[word.length - 1 - i])
      return false;
  }
  return true;
}

/* 
  Loop for half the length of the word
    Round down since we won't need to check the center letter of a word of an odd length
  Each loop, check if (character i from start of word) === (character i from end of word)
  If it fails that test, then return false
*/

/*
  Get half the length of the array (rounding down)
  Loop for half the length, storing how many loops we've gone through as 'i'
    if the character 'i' characters away from the start of the word is not the same as the character 'i' characters away from the end of the word, then return false
  if you finish all the loops, return true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
