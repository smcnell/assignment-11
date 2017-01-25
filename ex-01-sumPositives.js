
/**
 * Ex-01 : sumPositives()
 *
 *  Write a function called sumPositives that takes an array of numbers and
 *  only adds the positive numbers
 *
*/
// input: array of numbers
// output: number

var sumPositives= function(arrayOfNumbers){
  var outputNumber= 0;
  for (var i=0; i < arrayOfNumbers.length; i++){
    if (arrayOfNumbers[i] > 0) {
      outputNumber= outputNumber + arrayOfNumbers[i]
    }
  }
return outputNumber
}



console.assert(sumPositives([3, -1, 4, 5, -3, -4]) === 12);
console.assert(sumPositives([-11, 30,-20, 40, 100]) === 170);
console.assert(sumPositives([4 ,-10,-30, -4, 201]) === 205);
