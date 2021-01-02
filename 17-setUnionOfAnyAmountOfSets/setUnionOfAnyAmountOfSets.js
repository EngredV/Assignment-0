function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  const givenSet = new Set();
  
  for (i = 0; i < args.length; i++) {
     for (arg of args[i]) {
        givenSet.add(arg);
     }
   }
   return givenSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
