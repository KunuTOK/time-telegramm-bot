const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '742875963:AAEtJnKfKL8CjS9WRHJZnZHNo3Rhk2_Bo_8';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/time/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'https://www.timeserver.ru/cities/us/san-francisco');
});
