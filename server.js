const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Auto Deploy</title></head>
      <body>
        <h1>🚀 Auto Deployment Working!</h1>
        <p><strong>Port:</strong> ${PORT}</p>
        <p><strong>Subdomain:</strong> ${process.env.APP_NAME || 'Unknown'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>✅ GitHub Actions + PM2 + Nginx</p>
      </body>
    </html>
  `);
});

app.get("/api", (req, res) => {
  res.json({ 
    message: "API is working!", 
    port: PORT,
    app: process.env.APP_NAME || 'Unknown',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
