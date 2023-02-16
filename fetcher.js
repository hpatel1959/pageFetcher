const request = require('request');
const fs = require('fs');

const requestURL = process.argv[2];
const path = process.argv[3];

request(requestURL, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  } else {
    fs.writeFile(path, body, (err) => {
      if (err && path === undefined) {
        console.log('File path is invalid');
        process.exit();
      }
      if (err) {
        console.log('error: ', err);
      } else {
        fs.readFile(path, 'utf8', (err, data) => {
          if (err) {
            console.log('error: ', err);
          } else {
            console.log(`Downloaded and saved ${data.length} bytes to ${path}`);
          };
        });
      };
    })
  };
});


// ------- code for stretch 3 thats not working-----
// const readline = require("readline");
// const rl = realine.createInterface({
//     stdin = process.stdin;
//     stdout = process.stdout;
// });
// fs.readFile(path, (err) => {
    //   if (!err) {
    //     rl.question('This file already exists, are you sure you want to overwrite it? (type n(no)/y(yes))', (stdin) => {
    //       if (stdin === 'n') {
    //         process.exit();
    //       }
    //       if (stdin === 'y') {
    //         rl.close();
    //       }
    //     });
    //   }
    // });


