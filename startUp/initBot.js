const httpService = require('../services/http.service')

const webhookUrlEndPoint = process.env.NGROK_URL + '/webhook'

async function init() {
    const currentWebhook = await getWebhookInfo();

    if (!currentWebhook.url && webhookUrlEndPoint && currentWebhook.data.result.url !== webhookUrlEndPoint) {
        const updatedWebhook = await setWebhook(webhookUrlEndPoint)
    }

    async function getWebhookInfo() {
        try {
            return await httpService.get('/getWebhookInfo')
        } catch (error) {
            console.log(error)
        }

    }
    function setWebhook(url) {
        return httpService.post('/setWebhook', {
            url
        })
    }
}
module.exports = { init }