#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Scan for blog post directories (YYYY-MM-DD-* pattern)
function scanBlogDirectories() {
  const rootDir = process.cwd();
  const directories = [];
  
  try {
    const items = fs.readdirSync(rootDir);
    
    for (const item of items) {
      const itemPath = path.join(rootDir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory() && /^\d{4}-\d{2}-\d{2}-/.test(item)) {
        directories.push(item);
      }
    }
    
    // Sort directories by name (which includes date) in descending order
    directories.sort((a, b) => b.localeCompare(a));
    
    return directories;
  } catch (error) {
    console.error('Error reading directories:', error);
    return [];
  }
}

// Write the directories to the JSON file
function writeBlogDirectories(directories) {
  const outputPath = path.join(__dirname, 'api', 'blog-directories.json');
  const jsonContent = JSON.stringify(directories, null, 2);
  
  try {
    fs.writeFileSync(outputPath, jsonContent);
    console.log(`Updated ${outputPath} with ${directories.length} directories`);
  } catch (error) {
    console.error('Error writing blog directories:', error);
  }
}

// Main execution
if (require.main === module) {
  const directories = scanBlogDirectories();
  writeBlogDirectories(directories);
  console.log('Blog directories found:', directories);
}

module.exports = { scanBlogDirectories, writeBlogDirectories }; 