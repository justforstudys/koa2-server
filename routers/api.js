const router = require('koa-router')();

module.exports = router.post('/userLogin', async (ctx) => {
  ctx.status = 200;
  ctx.body = {
    success: true,
    message: '登录成功',
    data: {
      token: 'thisisarandomtoken'
    }
  }
})