const Repo = require("./repo");

class PullRequest extends Repo {
    constructor() {
        super();
        this.title = 'Update main';
        this.branchName = 'main';
        this.dateCreated = '15-04-2022';
        this.status_request = 'Success';
        this.repositoryNameAssociated = super.name;

    }

    getStatus() { return `${this.status_request}` };
    getTitleAndAutor() { return `Title: ${this.title}, author: ${this.author}` };
}

module.exports = PullRequest;
