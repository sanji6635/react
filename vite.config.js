import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
  },
  base: "/react/", // this line needs to be add and the line should contain the repo name for the current repo the name is "react"
});
