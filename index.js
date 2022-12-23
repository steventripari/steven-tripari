#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk'); //chalk 5 in ESM, using chalk 4.0
const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse
const githubClr = chalk.hex(`#6cc644`).bold.inverse
const linkedinClr = chalk.hex(`#0077b5`).bold.inverse

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

log(`${italic(
    `Design Research Specialist at Macy's | The Webby Awards 2022 Official Honoree - 95th Macy's Thanksgiving Day Parade NFTs | Building Web3.0 | User Experience Evangelist | n00b Developer`
)}

🐦 ${twitterClr(` Twitter `)}:    ${dim(`https://twitter.com/steventripari`)}
📖 ${githubClr(` GitHub `)}:     ${dim(`https://github.com/steventripari`)} 
💼 ${linkedinClr(` LinkedIn `)}:   ${dim(`https://www.linkedin.com/in/stripari/`)} 
`);

