const request = require('request');
const argv = process.argv;
const args = argv.slice(2);

console.log(args);
// request(args[0], {
//   method: 'POST',
//   headers: {
//     cookie: `sessionid=${args[1]}`
//   }
// }, (err, res, body) => {
//   console.log(body);
// })