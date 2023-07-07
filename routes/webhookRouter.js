const express = require('express');
const router = express.Router();
const httpService = require('../services/http.service')

router.post('/', function (req, res, next) {
    res.status(200).send('OK')

    if (req.body.message.text === '/start') {
        console.log('true')
        httpService.post('/sendMessage', {
            chat_id: req.body.message.chat.id,
            text: 'Привет бро',
        })
    }
});

module.exports = router;
