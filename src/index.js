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

// Send this to the server
// console.log("Authorization:", encoded_authorization);

// from the server

let decoded_authorization = base64.decode(encoded_authorization);
let [un, pw] = decoded_authorization.split(":");
// console.log("Checking login for ",un, pw);

// how to make and check a password
const bcrypt = require('bcrypt');

const complexity = 5;

async function makePassword(password){
   let hashed = await bcrypt.hash(password, complexity);
   return hashed;
}

makePassword("kitty23").then(console.log);

const PASSWORD_DB = $2b$05$g53OxSwFMBg1NR/bs8RnK.jQqpNPcWa0E0244DDTZUjHk93d363Dq;



async function showPasswordCheck(password){
    const isCorrectPassword = bcrypt.compare(password, PASSWORD_DB);
}

showPasswordCheck("kitty23").then(console.log);
showPasswordCheck("kitty24").then(console.log);
showPasswordCheck("kitty06").then(console.log);