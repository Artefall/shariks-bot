const TelegramBot = require('node-telegram-bot-api');
const process = require('process');

const FIRST_ARGUMENT_INDEX = 2;
const token = process.argv[FIRST_ARGUMENT_INDEX];

const bot = new TelegramBot(token, {polling: true});

bot.onText(/шарикс/i, (msg, match) => {
    
    const chatId = msg.chat.id;
    const RESPONSE_MESSAGE_FROM_SHARIKS = 'Гавс!';

  bot.sendMessage(chatId, RESPONSE_MESSAGE_FROM_SHARIKS);
});
