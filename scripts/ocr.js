const { createWorker } = require('tesseract.js');
const fs = require('fs');
const path = require('path');

(async () => {
  const worker = createWorker({
    logger: m => console.log(m)
  });
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');

  const imgs = [
    path.join(process.cwd(), 'public', 'DetailingPR1.jpeg'),
    path.join(process.cwd(), 'public', 'Datiling PR2.jpeg')
  ];

  const results = {};
  for (const img of imgs) {
    try {
      const { data: { text } } = await worker.recognize(img);
      results[path.basename(img)] = text;
      console.log(`Recognized ${path.basename(img)}`);
    } catch (err) {
      console.error(`Error recognizing ${img}:`, err.message || err);
      results[path.basename(img)] = '';
    }
  }

  await worker.terminate();
  const outPath = path.join(process.cwd(), 'public', 'ocr_results.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
  console.log('OCR complete — results written to', outPath);
})();
