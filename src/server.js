const express = require("express");
const path = require("path");
const fetchApplicationData = require("./fetchData");
const evaluateChecklist = require("./evaluateRules");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/checklist", async (req, res) => {
  const data = await fetchApplicationData();
  if (!data) return res.status(500).json({ error: "Failed to fetch data." });

  const results = evaluateChecklist(data);
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
