import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server';
import { getRouterManifest } from '@tanstack/react-start/router-manifest';
import { createRouter } from './router';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// For local development, use the absolute path.
// In production (Vercel sets NODE_ENV to "production"), skip loading .env.
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: '/Users/srichandankota/Desktop/mcp-client-and-server-main/.env',
  });
}

export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
