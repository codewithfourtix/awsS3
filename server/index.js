import express from "express";
import cors from "cors";
import uploadRoute from "./routes/upload";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/upload", uploadRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
