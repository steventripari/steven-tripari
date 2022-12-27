#!/usr/bin/env node
//const axios = require('axios');
const alert = require('cli-alerts-stripari');
const { Toggle } = require('enquirer'); // for cli that requires input
//const handleError = require('cli-handle-error');

const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const posts = require('./utils/posts');

const input = cli.input;
const flags = cli.flags;
  
(async () => {

	// Init and help
	init(flags.minimal, flags.clear);
	input.includes('help') && cli.showHelp(0);
/*	
	const prompt = new Toggle({
		message: 'Tell us about your class?',
		enabled: '2020',
		disabled: '2021',
	  });

	const response = await prompt.run();

	console.log(`response`, response);
*/

	//Print out the info
	flags.ad && alert({ type: 'info', msg: data.ad });
	flags.bio && console.log(data.bio);
	flags.social && console.log(data.social);
	flags.posts && alert({ type: 'info', msg: data.blog, name: data.blogName });
	flags.posts && (await posts());
	

	//debug info if needed
	debug(flags.debug, cli);
	
})();

