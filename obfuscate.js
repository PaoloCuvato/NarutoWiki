const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

// Percorso della build di Angular (modifica "tuo-progetto" con il nome esatto del tuo progetto o della cartella in dist)
const distFolder = path.join(__dirname, 'dist');

function obfuscateFiles(dir) {
  if (!fs.existsSync(dir)) {
    console.error(`Cartella di build non trovata: ${dir}`);
    return;
  }
  
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      obfuscateFiles(filePath);
    } else if (file.endsWith('.js')) {
      const code = fs.readFileSync(filePath, 'utf8');
      const obfuscatedResult = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        identifierNamesGenerator: 'hexadecimal',
        renameGlobals: false,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        unicodeEscapeSequence: true
      });
      fs.writeFileSync(filePath, obfuscatedResult.getObfuscatedCode(), 'utf8');
    }
  });
  console.log('Codice frontend offuscato con successo!');
}

obfuscateFiles(distFolder);