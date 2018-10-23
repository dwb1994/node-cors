const Koa = require('Koa');
const app = new Koa();
const cors = require('koa2-cors');
const PORT = 9001;

app.use(cors());

app.use(async ctx => {
  const data = {
    body: 'test'
  };
  ctx.body = `${JSON.stringify(data)}`;
});

app.listen(PORT, function () {
  console.log(`Port[${PORT}] started! `);
});