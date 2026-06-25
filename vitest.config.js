import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // ใช้ jsdom เพื่อให้ทดสอบโค้ดที่แตะ DOM (send.html / screen.html) ได้
    environment: "jsdom",
    include: ["tests/**/*.{test,spec}.{js,mjs}"],
    globals: true,
  },
});
