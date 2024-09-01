import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import http from 'http'; // Import the built-in http module
import cors from 'cors'; // Import cors

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable CORS for all requests

// Routes
app.use('/api', userRoutes);

// Error handling middleware, etc. can be added here

// Create an HTTP server
const server = http.createServer(app);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
