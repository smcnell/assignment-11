/**
 * Ex-05
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */



// input: string
// output: string smaller


var findLongestWord= function(string){
var splitIt= string.split(" ");
var longestNumber= 0;
var longestWord= "";
console.log(splitIt)


  for (var i= 0; i < splitIt.length; i++){
    var wordLength= splitIt[i].length;
    if(splitIt[i].includes("'")===true){
      wordLength=splitIt[i].length-1
    }

    if (longestNumber < wordLength){
      longestNumber= wordLength
      longestWord=splitIt[i];
    }

  } return longestWord

}


console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.assert(findLongestWord('a time to act.') === 'time')
