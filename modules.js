const fs = require('fs');
fs.writeFileSync('node.js', 'console.log("Hello World")');
console.log(__dirname);
