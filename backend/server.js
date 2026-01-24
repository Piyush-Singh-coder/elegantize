const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const sequelize = require("./config/db");
// Import routes (to be created)
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

// Database Connection and Sync
sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL Database Connected...");
    return sequelize.sync({ alter: true }); // Automatically updates schema
  })
  .then(() => {
    console.log("Database Synced");
  })
  .catch((err) => console.log("Error: " + err));

// Serve static assets in production
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging" ||
  true
) {
  // Always serve for now to support the "Single Server" setup
  // Set static folder
  app.use(express.static(path.join(__dirname, "dist")));

  // Any other route that isn't an API route should be handled by the React app
  app.get("*", (req, res) => {
    // Check if the request is for an API endpoint to avoid returning HTML for 404 API calls
    if (req.path.startsWith("/api")) {
      return res.status(404).json({ message: "API Endpoint not found" });
    }

    // Check if dist/index.html exists before sending it
    const indexPath = path.resolve(__dirname, "dist", "index.html");
    res.sendFile(indexPath, (err) => {
      if (err) {
        res
          .status(500)
          .send(
            "Server Error: Frontend build not found. Did you run 'npm run build'?",
          );
      }
    });
  });
} else {
  app.get("/", (req, res) => {
    res.send("Elegantize Backend Running (Dev Mode)");
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
