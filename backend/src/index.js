import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRouter } from '../routes/users.js';
import { recipesRouter } from '../routes/recipes.js';

const PORT = process.env.PORT || 3001;

dotenv.config();

const app = express();


app.use(express.json());

app.use(cors({
  origin: "https://cookbookvoyage.onrender.com"
}));


app.use('/authenticate', userRouter);
app.use('/recipes', recipesRouter);

mongoose.connect(process.env.REACT_APP_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// this will start the server
app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT)

});

