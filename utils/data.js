const chalk = require('chalk');
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const linkedinClr = chalk.hex(`#0077b5`).bold.inverse;

const bio = `${italic(
    `Design Research Specialist at Macy's | The Webby Awards 2022 Official Honoree - 95th Macy's Thanksgiving Day Parade NFTs | Building Web3.0 | User Experience Evangelist | n00b Developer`
)}`;

const social = `
🐦 ${twitterClr(` Twitter `)}:    ${dim(`https://twitter.com/steventripari`)}
📖 ${githubClr(` GitHub `)}:     ${dim(`https://github.com/steventripari`)} 
💼 ${linkedinClr(` LinkedIn `)}:   ${dim(`https://www.linkedin.com/in/stripari/`)} 
`;

const ad = `Check out the nodecli.com course I used to create this.`;

module.exports ={
    bio,
    social,
    ad,
};