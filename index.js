const core = require('@actions/core');
const github = require('@actions/github');
const { Octokit } = require("@octokit/rest");

const getMembers = async () => {
    try {
        const ghToken = core.getInput('token');
        const owner = core.getInput('owner');
        const repo = core.getInput('repo');

        const newOctokit = new Octokit({
            auth: ghToken
        });
        const stuff = await newOctokit.rest.repos.getUsersWithAccessToProtectedBranch({
            owner,
            repo,
            branch: "main",
        });
        core.setOutput("members", stuff);
        console.log(stuff);
        // const payload = JSON.stringify(github.context.payload, undefined, 2);
    } catch (error) {
        core.setFailed(error.message);
    }
};

getMembers();
