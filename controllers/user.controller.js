const user = require('../db/index').user

class UserController {
    async register(chatId, name) {
        const oldUser = await user.findOne({ chatId: chatId })
        if (!oldUser) {
            const newUser = new user({ name: name, chatId: chatId })
            newUser.save()
        } else {
            // обработать повторный вход в бота
        }
    }
    async remove(req, res, next) {
        // доделать
    }
}

module.exports = new UserController()