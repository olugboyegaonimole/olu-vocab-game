import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this if needed
    hmr: {
      clientPort: 3000, // Ensure HMR connects properly
      protocol: "ws",  // Force WebSocket usage
    },
  },
});
