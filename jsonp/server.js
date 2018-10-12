const Koa = require('Koa');
const app = new Koa();
const PORT = 9001;

app.use(async ctx => {
  const callbackName = ctx.request.query.callback;
  const data = {
    body: 'test'
  };
  ctx.body = `${callbackName}(${JSON.stringify(data)})`;
});

app.listen(PORT, function() {
  console.log(`Port[${PORT}] started! `);
});