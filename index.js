const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '742875963:AAEtJnKfKL8CjS9WRHJZnZHNo3Rhk2_Bo_8';
const bot = new TelegramBot(TOKEN,);
  webhook: {
    port: 9000
    AutoOpen: false
   };

bot.setWebhook('https://lambda-project.netlify.com/.netlify/functions/hello'/TOKEN);
bot.on('message', msg => {
  const chatId = msg.chat.id
  bot.sendMessage(id, 'hello', first.name)
});

bot.onText(/\/time/, (msg,  match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, match);
});
