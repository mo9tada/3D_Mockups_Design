import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

// ✅ Initialiser OpenAI avec la bonne clé
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Route GET (test)
router.route('/').get((req, res) => {
    res.status(200).send({ message: 'Welcome to DALL·E Routes' });
});

// ✅ Route POST (génération d'image)
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        console.log('📥 Prompt reçu:', prompt);

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        });

        const image = response.data[0].b64_json;

        res.status(200).json({ image });

    } catch (error) {
        console.error('❌ OpenAI Error:', error);

        res.status(500).json({
            error: 'Failed to generate image',
        });
    }
});

export default router;
