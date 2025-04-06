import {
  createStartHandler,
  defaultStreamHandler,
} from '@tanstack/react-start/server'
import { getRouterManifest } from '@tanstack/react-start/router-manifest'

import { createRouter } from './router'
import dotenv from "dotenv";
import path from "path";
// The ESM-compat way to get __dirname:
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Now you can do:
dotenv.config({
  path: path.resolve(
    __dirname,
    "/Users/srichandankota/Desktop/mcp-client-and-server-main/.env"
  ),
});
export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler)
