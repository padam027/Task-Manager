// app.ts
import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

mongoose.connect(process.env.MONGO_URI  || '')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

export default app;
