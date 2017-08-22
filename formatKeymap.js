const path = require('path');
const fs = require('fs');

const argv = process.argv;

if (argv.length !== 3) {
    console.log(`Usage: ${path.basename(__filename)} path/to/keymap.c`);
    process.exit(0);
}

const filePath = argv[2];
const text = fs.readFileSync(filePath).toString();
const lines = text.split(/\n/);

var layerName = null;
var layerLines = [];

for (var line of lines) {
    if (layerName == null) {
        var layerStartMatch = line.match(/^\/\s*\* (.*)$/);
        if(layerStartMatch != null) {
            layerName = layerStartMatch[1];
        }
    } else {
        var layerEndMatch = line.match(/^\s*\*\/$/);
        if (layerEndMatch == null) {
            layerLines.push(line);
        } else {
            console.log(`*${layerName}*`);
            console.log();
            console.log('```');
            layerLines
                .map(line => line.replace(/^\s*\*\s*/, ''))
                .forEach(line => console.log(line));
            console.log('```');
            console.log();

            layerName = null;
            layerLines = [];
        }
    }
}
