import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// VITE_BASE=/your-repo/ is set by the GitHub Action. './' works on any host path.
export default defineConfig({ base: process.env.VITE_BASE || './', plugins: [react()] });
