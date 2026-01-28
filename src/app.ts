import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import { authenticate } from "./middlewares/auth.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
// saat mengakses signin melalui /api/auth/signin

app.get("/", (req, res) => {
  res.send("Sporton Backend API is Running");
});

app.get("/test-middleware", authenticate, (req, res) => {
  res.send("Hore, kamu bisa mengakses karena kamu pakai token");
});

export default app;