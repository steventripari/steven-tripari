const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	ad:{
		type: 'boolean',
		default: true,
		desc: `Prints the ad`,
	},
	'no-ad':{
		type: 'boolean',
		default: false,
		desc: `Does not print the ad`,
	},
	bio: {
		type: 'boolean',
		default: true,
		desc: `Prints the bio`,
	},
	'no-bio':{
		type: 'boolean',
		default: false,
		desc: `Does not print the bio`,
	},
	clear: {
		type: 'boolean',
		default: true,
		desc: `Clears the console`,
	},
	debug:{
		type: 'boolean',
		default: false,
		alias: 'd',
		desc: `Prints the debug`,
	},
	minimal: {
		type: 'boolean',
		alias: 'm',
		desc: `Prints minimal info`,
	},
	posts:{
		type: 'boolean',
		default: false,
		alias: 'p',
		desc: `Prints blog posts`,
	},
	'no-posts':{
		type: 'boolean',
		default: false,
		desc: `Does not print the posts`,
	},
	social: {
		type: 'boolean',
		default: true,
		desc: `Prints social links`,
	},
	'no-social':{
		type: 'boolean',
		default: false,
		desc: `Does not print the ad`,
	},
	version:{
		type: 'boolean',
		default: false,
		alias: 'v',
		desc: `Prints CLI version`,
	},
};

const commands = {
	help: {
		desc: `Print the help info`,
	}
};

const helpText = meowHelp({
	name: `npx steven-tripari`,
	flags,
	commands,
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags,
};

module.exports = meow(helpText, options);
