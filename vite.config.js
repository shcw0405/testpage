import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/testpage/", // 设置正确的base路径，对应GitHub Pages的仓库名
});
