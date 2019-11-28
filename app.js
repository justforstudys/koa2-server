const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
const router = require('./routers/index')
// const http = require('http');

// http.createServer((req,res) => {
//   console.log(req);
// }).listen(3000);

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is start at port 3000');
})