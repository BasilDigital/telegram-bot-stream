const httpService = require('../services/http.service')
const userController = require('./user.controller')

const commandMessages = {
    "/start": {
        text: 'Привет бро',
        replyMarkup: {
            keyboard: [[{
                text: 'Расписание',
            }, {
                text: 'Мерч',
            }
            ], [{
                text: 'Правила',
            }]]
        }
    },
    "/restart": {
        text: 'Перезапуск бота',
        replyMarkup: {
            remove_keyboard: true
        }
    },
    "/menu": {
        text: 'Новое меню',
    },

}
const textMessages = {
    "не бро": { text: "Сам ты не бро" },
    "Мерч": {
        text: "Мерч",
        replyMarkup: {
            keyboard: [
                [{ text: "Купить Мерч" }],
                [{ text: "Дропы Мерча" }],
                [{ text: "Главное меню" }]
            ]
        }
    },
    "Расписание": {
        text: "Расписание",
        replyMarkup: {
            keyboard: [
                [{ text: "Анонсы" }, { text: "Стримы" }],
                [{ text: "События" }],
                [{ text: "Главное меню" }]
            ]
        }
    },
    "Правила": {
        text: "Правила",
        replyMarkup: {
            keyboard: [
                [{ text: "Показать правила" }],
                [{ text: "Тестирование " }],
                [{ text: "Главное меню" }]
            ]
        }
    },
    "Главное меню": {
        text: "Главное меню",
        replyMarkup: {
            keyboard: [[{
                text: 'Расписание',
            }, {
                text: 'Мерч',
            }
            ], [{
                text: 'Правила',
            }]]
        }
    }
}




class MessageController {
    async incomeMessage(req, res, next) {
        const messageText = req.body.message.text
        const chatId = req.body.message.chat.id
        if (/^\//.test(messageText)) {
            if (messageText === '/start') {
                userController.register(chatId, req.body.message.chat.first_name)
            }
            if (commandMessages[messageText]) {
                httpService.post('/sendMessage', {
                    chat_id: chatId,
                    text: commandMessages[messageText].text,
                    reply_markup: commandMessages[messageText].replyMarkup
                })
            } else {
                this.noSuchMessage(chatId)
            }
        } else {
            if (textMessages[messageText]) {
                httpService.post('/sendMessage', {
                    chat_id: chatId,
                    text: textMessages[messageText].text,
                    reply_markup: textMessages[messageText].replyMarkup
                })
            } else {
                this.noSuchMessage(chatId)
            }
        }
    }
    async noSuchMessage(chatId) {
        httpService.post(
            '/sendMessage',
            {
                chat_id: chatId,
                text: "У нас нет этого сообщения"
            }
        )
    }
}

module.exports = new MessageController()