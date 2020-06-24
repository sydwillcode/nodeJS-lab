const path = require('path');
const fs = require('fs');


let chirps = [
    {
        "author": "Sydni",
        "chirp": "Hello, friends"
    },
    {
        "author": "Derrick",
        "chirp": "Don't forget your comma"
    },
    {
        "author": "Tasha",
        "chirp": "Not my problem"
    },
    {
        "author": "Autumn",
        "chirp": "Designated question asker"
    },
    {
        "author": "Cleveland",
        "chirp": "I'm about to work out"
    }
]

const chirpsData = JSON.stringify(chirps);
fs.writeFile("./chirps.json", chirpsData, () => console.log('done'));

fs.readFile("./chirps.json", (err, data) => {
    console.log(JSON.parse(data));
})

//  let chirpsPath = path.join(__dirname, '../chirps.json');

// fs.readFile(chirpsPath, {
//     encoding: "utf-8"
// }, (err, data) => {
//     let comment = JSON.parse(data);
//  comment.forEach( name => {
//         console.log(name.author)
//     });
// });

