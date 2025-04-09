const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('submit', (req, res) => {
    const { name, email, message } = req.body;

    const webhookURL = 'https://discord.com/api/webhooks/1256216928159268958/bre4txh7DVlGBbdqdrKDxbG0U8SdSVuZQxVXwxPO8kVgCo6f_0dVbN973QoVhs0wDUfy';

    axios.post(webhookURL, {
        content: `**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
    })
    .then(response => {
        res.json({ status: 'success', data: response.data });
    })
    .catch(error => {
        res.json({ status: 'error', message: error.message });
    });
});

app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});
