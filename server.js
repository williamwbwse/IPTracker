const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  // Create an object to hold the header information
  const headersInfo = {
    headers: req.headers,
    ip: req.ip,
    "cf-connecting-ip": req.headers["cf-connecting-ip"],
    "x-forwarded-for": req.headers["x-forwarded-for"],
  };

  res.json(headersInfo);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
