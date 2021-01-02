function frequencyCounter(word) {
  // Insert code here;
  var frequency = {};
  
  for (i = 0; i < word.length; i++) {
     if (!frequency[word.charAt(i)]) {
       frequency[word.charAt(i)] = 1;
     }
     else {
         frequency[word.charAt(i)]++;
     }
  }
  return frequency;
}

// Do not edit this line;
module.exports = frequencyCounter;
