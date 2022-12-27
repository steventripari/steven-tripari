const axios = require('axios');
const ora = require ('ora');
const { dim } = require('chalk');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const stripHTML = require('cli-strip-html');


//const to = require()
const spinner = ora({ text: '' });
const apiURL = `https://Awais.dev/api/posts`;

module.exports = async () => {
    spinner.start(dim(`Fetching 1o latest blog posts...`));
    const [err, res] = await to(axios.get(apiURL));
    handleError(`API CALL FAILED`, err, true, true);
    
    // console.log('res', res) // logs the results of the API call
    const posts = res.data.map(post => {
        return {title: stripHTML(post.title.rendered), link: post.link }
    })
    spinner.stop();

    posts.map(({title, link}, index) => {
        console.log(`${dim(`#${++index}`)} ${title}`);
        console.log(dim(link));
        console.log();
    });
};
