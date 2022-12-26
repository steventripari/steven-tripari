const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('./../package.json');

module.exports = (minimal, clear) => {
    unhandled();

    !minimal && 
        welcome({
            title: `Steven Tripari`,
            tagLine: `gm! We're all gonna make it.'`,
            description: pkgJSON.description,
            version: pkgJSON.version,
            bgColor: `#FADC00`,
            color: `#000000`,
            bold: true,
            clear,
        });

    minimal && console.log(`Steven Tripari`);
        

    checkNode('10', { fail: false });
};