function countLetters (str){
  var alpha = str.split("");
  var frequency = {};
  for (var i = 0; i < alpha.length; i++) {
      var repeat = [alpha[i]];
    if (frequency[alpha[i]]) {
      frequency[alpha[i]].push(i);
    } else {
      frequency[alpha[i]] = [i];
    }
  }
  return frequency;
}
console.log(countLetters("lighthouse in the house"));