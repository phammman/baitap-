const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// ===== MIDDLEWARE =====
app.use(helmet()); // Bảo mật header
app.use(morgan("dev")); // Log request ra terminal
app.use(
  cors({
    origin: "http://localhost:5173", // URL frontend Vite của bạn
    credentials: true,
  }),
);
app.use(express.json()); // Đọc được body JSON
app.use(express.urlencoded({ extended: true }));

// ===== ROUTE TEST =====
app.get("/", (req, res) => {
  res.json({ message: "API đang chạy 🚀" });
});

// ===== GLOBAL ERROR HANDLER (để cuối cùng) =====
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Lỗi server",
  });
});

module.exports = app;
