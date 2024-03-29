const request = require('request');
const argv = process.argv;
const args = argv.slice(2);

const url = 'https://api.juejin.cn/growth_api/v1/check_in';
const checkInUrl = `${url}?aid=${args[0]}&uuid=${args[1]}&spider=${args[2]}&_signature=${args[3]}`;
request(checkInUrl, {
  method: 'POST',
  headers: {
    cookie: `sessionid=${args[4]}`
  }
}, (err, res, body) => {
  console.log(body);
  checkInRet(body);
  // 签到成功触发后再去抽奖
  drawReq()
})
const drawUrl = `https://api.juejin.cn/growth_api/v1/lottery/draw?aid=${args[0]}&uuid=${args[1]}&spider=${args[2]}&_signature=${args[3]}`;
const drawReq = () => {
  request(drawUrl, {
    method: 'POST',
    headers: {
      cookie: `sessionid=${args[4]}`
    }
  }, (err, res, body) => {
    console.log(body);
    checkInRet(body);
  })
}


const checkInRet = (msg) => {
  request('http://www.pushplus.plus/send', {
    method: 'POST',
    json: true,
    body: {
      token: args[5],
      content: msg,
      template: 'json'
    }
  }, (err, res, body) => {
    console.log(body);
  })
}