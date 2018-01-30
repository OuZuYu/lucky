const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

router.post('/save', async (ctx, next) => {
	console.log(12313123)
    let level = ctx.request.body.level,
    	peple= ctx.request.body.peple;
    	console.log(level, people);
    	await next();
});


app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');