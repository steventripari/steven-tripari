#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: pkgJSON.name,
	tagLine: `How's it goin'?`,
	description: pkgJSON.description,
    bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: pkgJSON.version,
});

console.log(`
Steven Tripari - Creative Problem Solver!

Design Research Specialist at Macy's | The Webby Awards 2022 Official Honoree - 95th Macy's Thanksgiving Day Parade NFTs | Building Web3.0 | User Experience Evangelist | n00b Developer

🐦 Twitter:    https://twitter.com/steventripari
📖 Github:     https://github.com/steventripari 
💼 Linkedin:   https://www.linkedin.com/in/stripari/ 

`);
