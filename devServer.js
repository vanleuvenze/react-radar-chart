const Koa = require('koa');
const send = require('koa-send');

const logger = require('koa-logger');

// webpack setup
const webpack = require('webpack');
const {devMiddleware, hotMiddleware} = require('koa-webpack-middleware');
const config = require('./webpack/webpack.config.dev.js');
const compiler = webpack(config);

const app = new Koa();

//setting up webpack dev environment
app.use(logger());
app.use(devMiddleware(compiler, {publicPath: config.output.publicPath}));
app.use(hotMiddleware(compiler));

app.use(async (ctx) => {
  await send(ctx, '/build/index.html');
});


app.listen(8888);

console.log('asdf', __dirname);
console.log('listening on 8888');
