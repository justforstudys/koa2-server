const router = require('koa-router')();

module.exports = router.post('/userLogin', async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    success: true,
    message: '',
    data: {
      text: 'hello world'
    }
  }
})