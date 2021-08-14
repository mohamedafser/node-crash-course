const path = require("path");

// Base File name

console.log(path.basename(__filename));

// DIRECTORY NAME
console.log(path.dirname(__filename));

// FILE EXTENSION
console.log(path.extname(__filename));

// CREATE PATH OBJECT
console.log(path.parse(__filename));

// CONTATENATE PATHS
console.log(path.join(__dirname, "Folder name", "file-name.js"));
