import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import cors from "cors";

dotenv.config({ path: "./.env" });

cloudinary.v2.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Cloud_Api,
  api_secret: process.env.Cloud_Secret,
});

const app = express();

const port = process.env.PORT || 5000;

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://gregarious-capybara-5c27be.netlify.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
import userRoutes from "./routes/userRoutes.js";
import pinRoutes from "./routes/pinRoutes.js";

app.use("/api/user", userRoutes);
app.use("/api/pin", pinRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "PicSphere backend is running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

const startServer = async () => {
  try {
    await connectDb();

    app.listen(port, "0.0.0.0", () => {
      console.log(`PicSphere backend running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();