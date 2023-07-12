import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from '../routes/users.js';
import { recipesRouter } from '../routes/recipes.js';
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/authenticate', userRouter);
app.use('/recipes', recipesRouter);

mongoose.connect('mongodb+srv://johnkedingamedev:7xg9HD0axBrHekLb@recipes.2pcuo6e.mongodb.net/recipes?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log('Server running on port 3001'));
