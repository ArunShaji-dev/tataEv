import { defineConfig } from 'vite'

const basePath = (process.env.VITE_BASE_PATH || '/').trim();

export default defineConfig({
  base: basePath,
  // ... other options
});