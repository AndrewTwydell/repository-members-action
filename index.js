const core = require('@actions/core');
const { Octokit } = require("@octokit/rest");

const getMembers = async () => {
    try {
        const ghToken = core.getInput('token');
        const owner = core.getInput('owner');
        const repo = core.getInput('repo');

        const octokit = new Octokit({
            auth: ghToken
        });
        const collaborators = await octokit.rest.repos.listCollaborators({
            owner,
            repo,
        });
        core.setOutput("members", collaborators.data.map((collaborator) => collaborator.id));
    } catch (error) {
        core.setFailed(error.message);
    }
};

getMembers();
