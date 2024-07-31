import express from 'express';
import connectDB from './config/db.mjs';
import dotenv from 'dotenv';
import userRoutes from './routes/api/users.mjs';
import authRoutes from './routes/api/auth.mjs';
import cors from 'cors'

dotenv.config();

//Initialize our app variable with Express
const app = express();

//Connect Database
connectDB();

// Initialize middleware
app.use(cors())
app.use(express.json({ extended: false }));

//Single endpoint just to test API. Send data to browser
// app.get('/', (req, res) => res.send('API Running'))

//Define Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Enviromental Variables
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
