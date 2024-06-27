import * as fs from 'fs';

if (!fs.existsSync('./src/generated')) {
  fs.mkdirSync('./src/generated');
}
