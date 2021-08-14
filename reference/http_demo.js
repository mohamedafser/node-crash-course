const http = require("http");

// CREATE SERVER OBJECT
http
  .createServer((req, res) => {
    // WRITE RESPONSE
    res.write("Hello response written");
    res.end();
  })
  .listen(5000, () => console.log("Server started"));
