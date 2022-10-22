const request = require('request');
const argv = process.argv;
const args = argv.slice(2);

const url = 'https://api.juejin.cn/growth_api/v1/check_in'
const reqUrl = `${url}?aid${args[0]}&uuid=${args[1]}&spider=${args[2]}&_signature=${args[3]}`
request(reqUrl, {
  method: 'POST',
  headers: {
    cookie: `sessionid=${args[4]}`
  }
}, (err, res, body) => {
  console.log(body);
})