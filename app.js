import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API Responding");
});

app.listen(PORT, () => console.log("server runinng at: ", PORT));
