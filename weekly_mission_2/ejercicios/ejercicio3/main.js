const Repo = require('./repo');
const Issue = require('./issue');
const PullRequest = require('./pull_request');

const repo = new Repo();
const issue = new Issue();
const pullRequest = new PullRequest();
// desmostracion de repo
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

// desmostracion de issue
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

// desmostracion de issue
console.log('el status es: ' + pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor())