require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const ExplorerController = require('./controllers/ExplorerController');

const token = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});



ExplorerController.telegramBot(bot);