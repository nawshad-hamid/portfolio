// Deploy script for GitHub Pages
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

const distPath = path.join(__dirname, "../dist");

// Check if dist directory exists, if not run build
if (!fs.existsSync(distPath)) {
  console.log("dist directory not found. Running npm run build first...");
  execSync("npm run build", { stdio: "inherit", cwd: path.join(__dirname, "..") });
}

// 1. Create .nojekyll to prevent GitHub from ignoring files that begin with an underscore
const nojekyllPath = path.join(distPath, ".nojekyll");
fs.writeFileSync(nojekyllPath, "");
console.log("✓ Created .nojekyll");

// 2. Copy index.html to 404.html for SPA routing on GitHub Pages
const indexPath = path.join(distPath, "index.html");
const notFoundPath = path.join(distPath, "404.html");
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log("✓ Created 404.html for client-side routing");
}

// 3. Deploy using gh-pages package
try {
  const ghPages = require("gh-pages");
  console.log("Publishing dist to gh-pages branch...");
  ghPages.publish(
    distPath,
    {
      branch: "gh-pages",
      message: "Auto-deployed Nawshad Hamid Portfolio to GitHub Pages [skip ci]",
      dotfiles: true,
    },
    (err) => {
      if (err) {
        console.error("❌ Error deploying to GitHub Pages:", err);
        process.exit(1);
      }
      console.log("\n🚀 Successfully deployed to GitHub Pages!");
      console.log("Configure GitHub Pages in your repo Settings -> Pages -> Source: Deploy from branch 'gh-pages' / (root).");
    }
  );
} catch (error) {
  console.error("Error executing gh-pages:", error.message);
  process.exit(1);
}
