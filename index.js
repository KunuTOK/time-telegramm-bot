const TelegramBot = require('node-telegram-bot-api');
//const config = require('config');
const Koa = require('koa');
const Router = require('koa-router');

const token = '742875963:AAEtJnKfKL8CjS9WRHJZnZHNo3Rhk2_Bo_8';
const bot = new TelegramBot(token);
bot.setWebhook(`${'url'}/bot`);

const app = new Koa()
const router = Router()
router.post('/bot', ctx => {
  console.log(ctx)
  ctx.status = 200
})

app.use(router.routes())

const port = config.get('port')
app.listen(port, () => {
  console.log(`listening on ${port}`)
})

bot.onText(/\/time/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'https://www.timeserver.ru/compare/san-francisco/moscow');
});
