import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);

mongoose.connect('mongodb+srv://venothadelan:iZ9Lh5KRzrxkP4bB@cluster0.ccdcsok.mongodb.net/recipes?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3001, () => console.log('Server running on port 3001'));