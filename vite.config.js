import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "login.html",
        admin: "./pages/admin.html",
        student: "./pages/student.html",
        teacher: "./pages/teacher.html",
      },
    },
  },
});
