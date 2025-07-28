// Simple API to list blog post directories
// This can be used with any server (Node.js, Python, etc.)

// For Node.js/Express example:
/*
const express = require('express');
const fs = require('fs');
const path = require('path');

app.get('/api/blog-directories', (req, res) => {
  const rootDir = path.join(__dirname, '..');
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
    
    res.json(directories);
  } catch (error) {
    console.error('Error reading directories:', error);
    res.status(500).json({ error: 'Failed to read directories' });
  }
});
*/

// For Python/Flask example:
/*
from flask import Flask, jsonify
import os
import re

app = Flask(__name__)

@app.route('/api/blog-directories')
def get_blog_directories():
    root_dir = os.path.dirname(os.path.dirname(__file__))
    directories = []
    
    try:
        for item in os.listdir(root_dir):
            item_path = os.path.join(root_dir, item)
            if os.path.isdir(item_path) and re.match(r'^\d{4}-\d{2}-\d{2}-', item):
                directories.append(item)
        
        return jsonify(directories)
    except Exception as e:
        print(f"Error reading directories: {e}")
        return jsonify({"error": "Failed to read directories"}), 500
*/

// For static hosting (no server), you can create a JSON file:
// Create a file called blog-directories.json in the api/ directory
// and update it manually or with a build script 