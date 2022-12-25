const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('./../package.json');

module.exports = () => {
    unhandled();

    welcome({
        title: `Steven Tripari`,
        tagLine: `gm! We're all gonna make it.'`,
        description: pkgJSON.description,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: pkgJSON.version,
    });

    checkNode('10', { fail: false });
};