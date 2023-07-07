const axios = require('axios').default;

const telegramToken = "6247716193:AAGeGDMgS_SAifb8SLaJtaloJCZr9yQgZQo"

module.exports = axios.create({
    baseURL: `https://api.telegram.org/bot${telegramToken}`
})