const url = require("url");

const myUrl = new URL(
  "http://mywesite.com:8000/hello.html?id=200&status=active"
);

// SERILIZED URL
console.log(myUrl.href);
console.log(myUrl.toString());

// HOST (ROOT DOMAIN)
console.log(myUrl.host);

// HOST NAME (DOES NOT GET PORT)
console.log(myUrl.hostname);

// PATHNAME
console.log(myUrl.pathname);

// SERIALIZED QUERY
console.log(myUrl.search);

// PARAMS OBJECT
console.log(myUrl.searchParams);

// ADD PARAMS
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

// LOOP THROUGH PARAMS
myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
