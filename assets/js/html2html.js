const fs = require('fs');
const { argv } = require('process');

const ifile = argv[2];

const buf = fs.readFileSync(ifile);

buf.toString().split(/\n/).forEach((line) => {
  const out = line
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

  console.log(out);
});

