const ora = require('ora');
const {green, yellow } = require('chalk');
const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

const spinner = ora({ text: '' });
const apiURL = `https://api.github.com/users/steventripari`;

module.exports = async() => {
        spinner.start(`${yellow(`FOLLOWERS`)} fetching...`);
        const [error, res] = await to(axios.get(apiURL));
        handleError(`API CALL FAILED`, error, false, false);

        const ghFollowers = res.data.followers;
        spinner.succeed(`${green(`FOLLOWERS`)} fetched`);
        console.log(`
GitHub Followers: ${ghFollowers}
`);

};
