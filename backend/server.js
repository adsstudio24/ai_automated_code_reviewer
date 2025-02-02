const express = require('express');
const openai = require('openai');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/review', async (req, res) => {
    try {
        const response = await openai.Completion.create({
            model: 'text-davinci-003',
            prompt: `Перевір код:

${req.body.code}`,
            max_tokens: 200
        });

        res.json({ feedback: response.choices[0].text.trim() });
    } catch (error) {
        res.status(500).json({ error: 'Не вдалося перевірити код' });
    }
});

app.listen(5000, () => console.log('AI Code Reviewer запущено'));
