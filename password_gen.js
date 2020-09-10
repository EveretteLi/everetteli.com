// This file generate password for the website
"use strict";

let crypto = require('crypto');
let io = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

const HASH_ALG = 'sha256';

function hash(s) {
    return crypto.createHash(HASH_ALG).update(s).digest('hex');
}

io.question("plaintext password: ", (ps) => {
    console.log(`cyphortext: ${hash(ps)}`);
    io.close();
})