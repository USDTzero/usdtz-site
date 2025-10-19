import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
plugins: [react()],
server: { port: 5173 },
build: { sourcemap: true },
base: "/" // set to "/usdtz-site/" if deploying to GitHub Pages under a subpath
});
