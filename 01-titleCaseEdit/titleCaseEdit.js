function titleCaseEdit(title) {
  // Insert code here;  
  return title.toLowerCase().replace(/(^|\s)\S/g, function(newTitle) {
        return newTitle.toUpperCase()
  });
}

// Do not edit this line;
module.exports = titleCaseEdit;
