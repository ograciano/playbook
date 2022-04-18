const Repo = require( "./repo");

class Issue extends Repo {
    constructor() {
        super();
        this.title = 'Issue 1';
        this.repositoryNameAssociated = super.name;
        this.status_issue = 'Active';
        this.numberOfComments = '100';
        this.labels = '2';
        this.dateCreated = '15-04-2022';
        this.lastUpdated = '15-04-2022';
    }
    getTitleAndAuthor() { return `Title: ${this.title}, author: ${this.author}` };
    getGeneralInfo() { return `Este issue: ${this.title} se encuentra ${this.status_issue} desde: ${this.dateCreated}`};
}

module.exports = Issue;