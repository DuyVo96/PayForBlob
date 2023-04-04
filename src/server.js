const express = require("express");
const app = express();

// Enable CORS for all requests
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );
  next();
});

// Your API routes and logic here

app.listen(3000, () => {
  console.log("API server started on port 3000");
});
