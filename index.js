// const Person = require("./person");
// const person1 = new Person("John", 23);
// person1.greeting();

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }

  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Mohamed", age: 23 },
  //       { name: "Age", age: 25 },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }
  // BUILD DYNAMIC FILEPATH
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // EXTENSION OF FILE
  let extName = path.extname(filePath);

  // INITIAL CONTENT TYPE
  let contentType = "text/html";

  // CHECK EXT AND SET CONTENT TYPE
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    default:
      contentType = "text/html";
  }
  // READ FILE
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // PAGE NOT FOUND
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content);
          }
        );
      } else {
        // SERVER ERROR
        res.writeHead(500);
        res.end(`Server error ${err.code}`);
      }
    } else {
      // SUCCESS
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on this port ${PORT}`));
