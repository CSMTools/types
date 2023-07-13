const fs = require('fs');
fs.writeFileSync('./dist/cjs/package.json', '{"type": "commonjs"}');
fs.writeFileSync('./dist/mjs/package.json', '{"type": "module"}');