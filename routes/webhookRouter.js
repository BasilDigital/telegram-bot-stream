const express = require('express');
const router = express.Router();

const messageController = require('../controllers/message.controller')


router.post('/', async function (req, res, next) {
    res.status(200).send('OK')

    if (req.body.message.text) {
        messageController.incomeMessage(req, res, next)
    }

});

module.exports = router;
