class Repo {
    constructor() {
        this.name = "LaunchX";
        this.author = "ograciano";
        this.language = "JavaScript";
        this.numberOfCommits = 100;
        this.stars = 199;
        this.forks = 299;
        this.issues_open = 10;
        this.issues_close = 10;
    }

    getTotalIssues() {
        return this.issues_open + this.issues_close
    }

    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

module.exports = Repo;