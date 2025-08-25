import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from './src/config/db.js';

const app = express();
dotenv.config(); // Load environment variables from .env
const PORT = process.env.PORT || 3000;

connectDB();
