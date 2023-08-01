const fs = require('fs');
module.exports = function() {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error in file:', err);
    } else {
      const wordCount = data.split(/\s+/).length;
      console.log(wordCount);
      return String(wordCount);
    }
  });
}