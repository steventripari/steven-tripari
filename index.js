#!/usr/bin/env node
const chalk = require('chalk'); //chalk 5 in ESM, using chalk 4.0
const alert = require('cli-alerts-stripari');

const init = require('./utils/init');

const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const linkedinClr = chalk.hex(`#0077b5`).bold.inverse;

//*   (() => {})();    <-- Iffe function

(() => {
	init();

	log(`${italic(
		`Design Research Specialist at Macy's | The Webby Awards 2022 Official Honoree - 95th Macy's Thanksgiving Day Parade NFTs | Building Web3.0 | User Experience Evangelist | n00b Developer`
	)}

🐦 ${twitterClr(` Twitter `)}:    ${dim(`https://twitter.com/steventripari`)}
📖 ${githubClr(` GitHub `)}:     ${dim(`https://github.com/steventripari`)} 
💼 ${linkedinClr(` LinkedIn `)}:   ${dim(`https://www.linkedin.com/in/stripari/`)} 
`);

alert({ type: ' info ', msg: `Check out nodecli.com to learn about automation with node.js!`});

})();