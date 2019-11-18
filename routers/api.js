const router = require('koa-router')();

module.exports = router.get('/get', async (ctx) => {
  ctx.body = {
    success: true,
    data: {
      text: 'hello world'
    }
  }
})