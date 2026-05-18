const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = '/Users/nitinkumar/Developer/Web_Project/studio/public';

fs.readdirSync(publicDir).forEach(file => {
  if (file.endsWith('.png')) {
    const filePath = path.join(publicDir, file);
    const outputName = file.replace('.png', '.webp');
    const outputPath = path.join(publicDir, outputName);

    console.log(`Converting ${file} -> ${outputName}...`);
    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Successfully converted ${file} to ${outputName}`);
        fs.unlinkSync(filePath);
        console.log(`Deleted original PNG: ${file}`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  }
});
