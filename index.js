const core = require('@actions/core');
const github = require('@actions/github');

try {
    const ghToken = core.getInput('token');
    console.log(ghToken);
    core.setOutput("members", ["andrew", "Tom"]);
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
} catch (error) {
    core.setFailed(error.message);
}