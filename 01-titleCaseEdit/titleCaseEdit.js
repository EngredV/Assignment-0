function titleCaseEdit(title) {
  // Insert code here;  
  var newTitle = title.split("");

  for (i = 0; i < newTitle.length; i++) {
     newTitle[i] = newTitle[i][0].toUpperCase() + newTitle[i].substr(1);
  }
  return newTitle.join("");
}

// Do not edit this line;
module.exports = titleCaseEdit;
