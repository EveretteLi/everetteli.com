"use strict"
let event = require("events");
let fs = require("fs");
const path = 'assets/transtable/';
const path_to = 'assets/json/';
let rl = require("readline");
const process = require('process');

let files = fs.readdirSync(path);
console.log(files);

let io = rl.createInterface({
    input: fs.createReadStream(`assets/transtable/fa16.txt`),
    output: process.stdout,
    terminal: false
});
let json_all = new Object();
files.forEach((filename) => {
    io = rl.createInterface({
        input: fs.createReadStream(`${path}${filename}`),
        output: process.stdout,
        terminal: false
    });
    let json = new Object();
    json_all[filename] = json;
    let count = 0;

    io.on("line", (line) => {
        let line_list = line.trim().split(' ');
        let line_array = Object.values(line_list);
        let class_num = line_array.slice(0, 2);
        let str_class_num = class_num.join(' ');

        let table_row = [str_class_num];
        table_row = table_row.concat(line_array.slice(2,));
        console.log(table_row);
        json[count] = table_row;
        count += 1;
        console.log(json);
    });
    io.on("close", () => {
        console.log(json_all);
        let data = JSON.stringify(json);
        console.log('data: ' + data);
        fs.writeFile(`${path_to}${filename.slice(0, -4)}.json`, data, (err) => {
            if (err) {
                throw err;
            }
        });
    });
});


