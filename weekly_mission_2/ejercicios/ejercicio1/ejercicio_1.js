const repo = {
  name: "LaunchX",
  author: "ograciano",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`
  }
}

const issue = {
  title: 'Issue 1',
  repositoryNameAssociated: repo.name,
  status_issue: 'Active',
  numberOfComments: '100',
  labels: '2',
  author: repo.author,
  dateCreated: '15-04-2022',
  lastUpdated: '15-04-2022',
  getTitleAndAuthor: function() { return `Title: ${this.title}, author: ${this.author}` },
  getGeneralInfo: function() { return `Este issue: ${this.title} se encuentra ${this.status_issue} desde: ${this.dateCreated}`}
}

const pullRequest = {
  title: 'Update main',
  branchName: 'main',
  dateCreated: '15-04-2022',
  status_request: 'Success',
  repositoryNameAssociated: repo.name,
  getStatus: function() {return `${this.status_request}`},
  getTitleAndAutor: function() {return `Title: ${this.title}, author: ${repo.author}`}
}

// desmostracion de repo
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

// desmostracion de issue
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

// desmostracion de issue
console.log('el status es: ' + pullRequest.getStatus());
console.log(pullRequest.getTitleAndAutor());