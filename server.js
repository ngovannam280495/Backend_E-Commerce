import http from 'http';
import app from './App/app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 2024;
const server = http.createServer(app);
server.listen(PORT, console.log(`Server listening on ${PORT}`));
