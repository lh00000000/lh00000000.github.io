import fs from 'fs';
import path from 'path';

interface BlogPost {
  ts: string;
  caption: string;
  dt: string;
  asset: string;
}

function cleanAndParseMarkdown(content: string): BlogPost[] {
  // Split content by lines and find lines that look like JSON objects
  const lines = content.split('\n');
  const jsonObjects: BlogPost[] = [];

  for (const line of lines) {
    try {
      // Try to find content between curly braces
      const match = line.match(/\{.*\}/);
      if (match) {
        const jsonStr = match[0];
        const parsed = JSON.parse(jsonStr) as BlogPost;
        if (parsed.ts && parsed.caption && parsed.dt && parsed.asset) {
          jsonObjects.push(parsed);
        }
      }
    } catch (e) {
      // Skip invalid JSON
      console.error(e);
      continue;
    }
  }

  return jsonObjects;
}

// Read input file
const inputPath = process.argv[2];
if (!inputPath) {
  console.error('Please provide an input file path');
  process.exit(1);
}

const content = fs.readFileSync(inputPath, 'utf-8');
const blocks = cleanAndParseMarkdown(content);

// Write to output file
const outputPath = path.join('src', 'data', 'blocks.json');
fs.mkdirSync(path.join('src', 'data'), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(blocks, null, 2));
console.log(`Processed ${blocks.length} blocks and saved to ${outputPath}`); 