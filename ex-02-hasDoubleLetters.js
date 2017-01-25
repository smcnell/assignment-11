
/**
 * Ex-08 : hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
 *
**/

// input: string
// output: boolean

var hasDoubleLetters= function(string){
  var double= false;
  for (var i=0; i < string.length; i++) {
    if (string[i].toLowerCase()===string[i+1]) {
      double=true;
    }
  } return double
}

console.assert( hasDoubleLetters('stutter') === true )
console.assert( hasDoubleLetters('prospect') === false )
console.assert( hasDoubleLetters('shoehorn') === false )
console.assert( hasDoubleLetters('Aardvark') === true )
