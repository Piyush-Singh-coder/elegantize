import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendDir = path.join(__dirname, "frontend");
const backendDir = path.join(__dirname, "backend");
const distSource = path.join(frontendDir, "dist");
const distDest = path.join(backendDir, "dist");

console.log("🚀 Starting Deployment Preparation...");

// 1. Install Frontend Dependencies (if needed)
console.log("\n📦 Checking frontend dependencies...");
try {
  if (!fs.existsSync(path.join(frontendDir, "node_modules"))) {
    console.log("Installing frontend dependencies...");
    execSync("npm install", { cwd: frontendDir, stdio: "inherit" });
  }
} catch (error) {
  console.error("❌ Error installing dependencies:", error);
  process.exit(1);
}

// 2. Build Frontend
console.log("\n🔨 Building Frontend...");
try {
  execSync("npm run build", { cwd: frontendDir, stdio: "inherit" });
} catch (error) {
  console.error("❌ Build failed:", error);
  process.exit(1);
}

// 3. Move dist folder
console.log("\n🚚 Moving Build to Backend...");
try {
  // Remove existing dist in backend if it exists
  if (fs.existsSync(distDest)) {
    fs.rmSync(distDest, { recursive: true, force: true });
  }

  // Check if source dist exists
  if (!fs.existsSync(distSource)) {
    throw new Error("Frontend build directory (dist) not found!");
  }

  // Recursive copy function for Node < 16.7 (though we likely have newer)
  // Or just use fs.cpSync in Node 16.7+
  if (fs.cpSync) {
    fs.cpSync(distSource, distDest, { recursive: true });
  } else {
    // Fallback for older node (unlikely needed but safe)
    // Ignoring recursive copy implementation for brevity, assuming modern node
    console.error(
      "❌ Node.js version too old. Please manually copy frontend/dist to backend/dist",
    );
    process.exit(1);
  }

  console.log("✅ Success! frontend/dist copied to backend/dist");
} catch (error) {
  console.error("❌ Error moving files:", error);
  process.exit(1);
}

console.log("\n✨ Deployment Preparation Complete!");
console.log(
  '👉 Next: Push your changes to GitHub or run "npm start" in backend/',
);
