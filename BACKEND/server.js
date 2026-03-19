import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
const app = express();
app.use(cors());
const DATA_PATH = path.join(process.cwd(), "data", "questions.json");

app.get("/questions", (req, res) => {
  try {
    const raw = fs.readFileSync(DATA_PATH, "utf8");
    const data = JSON.parse(raw);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to read questions" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
