const http = require("http");
const https = require("https");
const querystring = require("querystring");
async function requestHttp(option) {
  return new Promise((resolve, reject) => {

    let {body={},method='GET'} = option
    if (method.toUpperCase() == 'GET') {
      let bodyArr = [];
      for (let item in body) {
        bodyArr.push(`${item}=${body[item]}`);
      }
      option['path'] += '?' + bodyArr.join('&');
    }else{
      body = querystring.stringify(option['body']);
    }
    const req = http.request(option, (res) => {
      res.on('data', (chunk) => {

        let data = new Buffer(chunk)
        resolve(data.toString("utf-8"));
      });
    })
    req.on('error', (e) => {
      reject(e);
    })
    method!='GET' &&req.write(body);
    req.end();
  })
}
async function requestHttps(option) {

  console.log(2)
  return new Promise((resolve, reject) => {

    let {body={},method='GET'} = option
    if (method.toUpperCase() == 'GET') {
      let bodyArr = [];
      for (let item in body) {
        bodyArr.push(`${item}=${body[item]}`);
      }
      option['path'] += '?' + bodyArr.join('&');
    }else{
      body = querystring.stringify(option['body']);
    }
    const req = https.request(option, (res) => {
      res.on('data', (chunk) => {
        let data = new Buffer(chunk)
        resolve(data.toString("utf-8"));
      });
    })
    req.on('error', (e) => {
      reject(e);
    })
    method!='GET' &&req.write(body);
    req.end();
  })
}
module.exports = {
  http:requestHttp,
  https:requestHttps
};