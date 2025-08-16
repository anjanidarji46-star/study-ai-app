import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("./"));

app.post("/ask", (req, res) => {
  const { question } = req.body;

  // For now, just return a simple dummy answer
  res.json({ answer: `You asked: "${question}". StudyMate AI will answer soon!` });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
