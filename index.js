const TelegramBot = require('node-telegram-bot-api');
const Koa = require('koa');
const Router = require('koa-router');

const TOKEN = '742875963:AAEtJnKfKL8CjS9WRHJZnZHNo3Rhk2_Bo_8';
const bot = new TelegramBot(TOKEN, {
   webhook: {
     port: 9000
     ({AutoOpen: false})
   }
});

bot.openWebHook()
bot.setWebhook(`${('https://lambda-project.netlify.com/.netlify/functions/hello')}/bot${TOKEN}`);
bot.on('message', msg => {
  const chatId = msg.chat.id
  bot.sendMessage(id, 'hello, first.name')
});

bot.onText(/\/time/, (msg, [source, match]) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, match);
});
