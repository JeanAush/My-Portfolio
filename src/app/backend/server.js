const express = require("express");
const path = require("path");
const { Pool } = require("pg");  // Correct import
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "*", // Allow all origins (Change this to your frontend domain in production)
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));

const pool = new Pool({
  user: process.env.DB_USER || "postgres",         // PostgreSQL username
  host: process.env.DB_HOST || "localhost",        // PostgreSQL host
  database: process.env.DB_NAME || "contact_db",  // Database name
  password: process.env.DB_PASSWORD || "yourpassword", // Secure this!
  port: process.env.DB_PORT || 5432,               // Default PostgreSQL port
});

app.use(bodyParser.json());
app.use(express.static("public"));

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("❌ Database connection error:", err);
  } else {
    console.log("✅ Database connected at:", res.rows[0].now);
  }
});

// Endpoint to download the CV
app.get("/download-cv", (req, res) => {
  const filePath = path.join(__dirname, "public", "Jean_Resume.pdf"); // Ensure correct path
  res.download(filePath, "Jean_Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Could not download the file.");
    }
  });
});

// Endpoint to handle contact form submissions
app.post("/api/submit-contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING *",
      [name, email, message]
    );
    res.status(200).json({
      success: true,
      message: "Your message has been submitted successfully.",
      data: result.rows[0], // Return the inserted data
    });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ success: false, message: "Failed to submit the form." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
