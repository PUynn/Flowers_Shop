import cors from 'cors';
import express from 'express';
import apiRouter from './routes/index.js';
import { errorHandler } from './common/middlewares/errorHandler.js';
import { notFoundHandler } from './common/middlewares/notFoundHandler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Pu's Flowers Backend API is running!" });
});

app.use('/api', apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
