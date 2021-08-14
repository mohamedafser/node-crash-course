const fs = require("fs");
const path = require("path");

// CREATE FOLDER
fs.mkdir(path.join(__dirname, "/test"), {}, function (error) {
  if (error) throw error;
  console.log("Folder created");
});

// CREATE AND WRITE TO FILE

fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World",
  (err) => {
    if (err) throw err;
    console.log("file Created");
    // APPEND FILE
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      "I LOVE NODE JS",
      (err) => {
        if (err) throw err;
        console.log("file Created");
      }
    );
  }
);

// READ FILE

fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// RENAME FILE

fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);
