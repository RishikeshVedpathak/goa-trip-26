import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// The Pages workflow sets VITE_BASE from the site's configured base path. './' works on any host path.
export default defineConfig({ base: '/goa-trip-26/', plugins: [react()] });
