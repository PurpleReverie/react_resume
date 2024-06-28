import * as fs from 'fs';

if (!fs.existsSync('./src/generated')) {
  fs.mkdirSync('./src/generated');
}

if (!fs.existsSync('./public/content')) {
  fs.mkdirSync('./public/content');
}

if (!fs.existsSync('./public/content/generated')) {
  fs.mkdirSync('./public/content/generated');
}

if (!fs.existsSync('./public/content/generated/blog')) {
  fs.mkdirSync('./public/content/generated/blog');
}

if (!fs.existsSync('./public/content/generated/project')) {
  fs.mkdirSync('./public/content/generated/project');
}
