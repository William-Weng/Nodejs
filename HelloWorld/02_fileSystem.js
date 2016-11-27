var fs = require('fs');
var filePath = 'hello.js';

fs.exists(filePath, function(exists) {
  if (!exists) {
    console.log('NO');
  } else {

    fs.readFile(filePath, function(error, content) {
      if (error) {
        console.log('error');
        return;
      } else {
        console.log(content);
      }
      
    });
  }
});
