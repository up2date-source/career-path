import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import { handleDemo } from '../server/routes/demo.ts';
import { postConsultation, getConsultations } from '../server/routes/consultations.ts';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/ping', (req, res) => {
  res.json({ message: 'CareerPath API is running!', timestamp: new Date().toISOString() });
});

app.get('/api/demo', handleDemo);
app.post('/api/consultations', postConsultation);
app.get('/api/consultations', getConsultations);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    service: 'CareerPath API',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'production'
  });
});

// Export the serverless function
export default serverless(app);
