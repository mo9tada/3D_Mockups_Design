import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';


dotenv.config();
console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);


const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Welcome from DALL.E',
    });
});

app.listen(8000, () => console.log('Server is running on port 8000'));
