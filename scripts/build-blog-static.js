#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Configuration
const ROOT_DIR = process.cwd();
const BLOG_DIR = path.join(ROOT_DIR, "blog");
const DIST_DIR = path.join(BLOG_DIR, "dist");
const API_DIR = path.join(DIST_DIR, "api");

// File name constants
const PUBLISH_FILE = "publish00000000.json";
const BUILD_SCRIPT = "build00000000.sh";

// Ensure dist directory exists
function ensureDistDir() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }
  if (!fs.existsSync(API_DIR)) {
    fs.mkdirSync(API_DIR, { recursive: true });
  }
}

// Scan for blog post directories (YYYY-MM-DD-* pattern)
function scanBlogDirectories() {
  const directories = [];

  try {
    const items = fs.readdirSync(ROOT_DIR);

    for (const item of items) {
      const itemPath = path.join(ROOT_DIR, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        directories.push(item);
      }
    }

    // Sort directories by name (which includes date) in descending order
    directories.sort((a, b) => b.localeCompare(a));

    return directories;
  } catch (error) {
    console.error("Error reading directories:", error);
    return [];
  }
}

// Read publish00000000.json file from a directory
function readPublishJson(directory) {
  const publishPath = path.join(ROOT_DIR, directory, PUBLISH_FILE);

  try {
    if (fs.existsSync(publishPath)) {
      const content = fs.readFileSync(publishPath, "utf8");
      return JSON.parse(content);
    }
  } catch (error) {
    console.warn(
      `Error reading ${PUBLISH_FILE} from ${directory}:`,
      error
    );
  }

  return null;
}

// Generate posts data from publish.json files
function generatePostsData(directories) {
  const posts = [];

  for (const dir of directories) {
    const publishData = readPublishJson(dir);

    if (publishData) {
      // Parse tags (array of strings)
      const tags = publishData.tags || [];

      // Handle redirects vs local posts
      const post = {
        href: publishData.redirect || `/${dir}`,
        tags: tags,
      };

      // Add label if it's a redirect (for display purposes)
      if (publishData.redirect) {
        post.label = dir;
      }

      posts.push(post);
    }
  }

  return posts;
}

// Generate all tags from posts
function generateAllTags(posts) {
  const allTags = new Set();

  for (const post of posts) {
    for (const tag of post.tags) {
      allTags.add(tag);
    }
  }

  return Array.from(allTags).sort();
}

// Write static files
function writeStaticFiles(directories, posts, allTags) {
  // Write blog-directories.json
  const directoriesPath = path.join(API_DIR, "blog-directories.json");
  fs.writeFileSync(directoriesPath, JSON.stringify(directories, null, 2));
  console.log(`✓ Generated: ${directoriesPath}`);

  // Write posts.json (for faster loading)
  const postsPath = path.join(API_DIR, "posts00000000.json");
  fs.writeFileSync(postsPath, JSON.stringify(posts, null, 2));
  console.log(`✓ Generated: ${postsPath}`);

  // Write tags.json
  const tagsPath = path.join(API_DIR, "tags00000000.json");
  fs.writeFileSync(tagsPath, JSON.stringify(allTags, null, 2));
  console.log(`✓ Generated: ${tagsPath}`);

  // Write a combined data file
  const combinedData = {
    directories,
    posts,
    tags: allTags,
    generatedAt: new Date().toISOString(),
  };
  const combinedPath = path.join(API_DIR, "blog-data00000000.json");
  fs.writeFileSync(combinedPath, JSON.stringify(combinedData, null, 2));
  console.log(`✓ Generated: ${combinedPath}`);
}




// Check if a directory has recent git changes (within the last 7 days)
function hasRecentGitChanges(directory) {
  const { execSync } = require("child_process");
  
  try {
    // Get the most recent commit date for files in this directory
    const result = execSync(
      `git log --since="7 days ago" --oneline -- "${directory}"`,
      { cwd: ROOT_DIR, encoding: 'utf8' }
    );
    
    // If there are any commits in the last 7 days, result will not be empty
    return result.trim().length > 0;
  } catch (error) {
    // If git command fails (e.g., not a git repo), assume no recent changes
    console.warn(`Warning: Could not check git history for ${directory}:`, error.message);
    return false;
  }
}

// Run build00000000.sh scripts in blog post directories (only if recent changes)
function runBuildScripts(directories) {
  const { execSync } = require("child_process");

  for (const dir of directories) {
    const buildScriptPath = path.join(ROOT_DIR, dir, BUILD_SCRIPT);

    if (fs.existsSync(buildScriptPath)) {
      // Check if there are recent git changes in this directory
      if (hasRecentGitChanges(dir)) {
        try {
          console.log(`🔧 Running ${BUILD_SCRIPT} in ${dir} (recent changes detected)...`);

          // Make script executable and run it
          fs.chmodSync(buildScriptPath, "755");
          execSync(`cd "${path.join(ROOT_DIR, dir)}" && ./${BUILD_SCRIPT}`, {
            stdio: "inherit",
            cwd: path.join(ROOT_DIR, dir),
          });

          console.log(`✅ Completed ${BUILD_SCRIPT} in ${dir}`);
        } catch (error) {
          console.error(
            `❌ Error running ${BUILD_SCRIPT} in ${dir}:`,
            error.message
          );
        }
      } else {
        console.log(`⏭️  Skipping ${BUILD_SCRIPT} in ${dir} (no recent changes)`);
      }
    }
  }
}

// Main build function
function buildBlog() {
  console.log("🔍 Scanning for blog posts...");

  ensureDistDir();

  const directories = scanBlogDirectories();
  console.log(`Found ${directories.length} blog directories`);

  const posts = generatePostsData(directories);
  console.log(`Found ${posts.length} published posts`);

  const allTags = generateAllTags(posts);
  console.log(`Found ${allTags.length} unique tags`);

  console.log("\n📝 Generating static files...");
  writeStaticFiles(directories, posts, allTags);


  console.log("\n🔧 Running build00000000.sh scripts...");
  runBuildScripts(directories);

  console.log("\n✅ Blog build complete!");
  console.log(`📊 Summary:`);
  console.log(`   - Directories: ${directories.length}`);
  console.log(`   - Published posts: ${posts.length}`);
  console.log(`   - Unique tags: ${allTags.length}`);
  console.log(`   - Output directory: ${DIST_DIR}`);
}

// Run if called directly
if (require.main === module) {
  buildBlog();
}

module.exports = { buildBlog };
