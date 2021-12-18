let sentence = "The movie is not that bad";
let array = sentence.split(" ");
const wordNot = array.indexOf("not")
const wordBad = array.indexOf("bad")

if (wordBad > wordNot) {
    const newWord = (wordBad - wordNot) +1; // Add one because indexes start at 0
    array.splice(wordNot,newWord, "good"); // replaces everything from the word not to bad
    let newArray = array.join(" ");
    console.log(newArray);
}else console.log(sentence)