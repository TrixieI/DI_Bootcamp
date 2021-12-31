/* Example of Anagrams

"Astronomer" is an anagram of "Moon starer"
"School master" is an anagram of "The classroom"
"The Morse Code" is an anagram of "Here come dots"

*/

function anagrams(word1, word2) {
  word1 = word1.toLowerCase().trim();
  word2 = word2.toLowerCase().trim();

  return check(word1) === check(word2);
}
function check(word) {
  return word.split("").sort().join("");
}
