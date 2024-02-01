const base64 = require("base-64");

let string = "hello/10/15/28";
let encoded = base64.encode(string);
let decoded = base64.decode(encoded);

console.log(encoded);
console.log(decoded);

// Authorization information:
// Basic <base64 username:password>

let username = "christopherLopez26"
let password = "kitty23"
let authorization = `${username}:${password}`;
let encoded_authorization = base64.encode(authorization);

console.log("Authorization:", encoded_authorization);