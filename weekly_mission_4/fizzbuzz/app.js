require('dotenv').config();
const Reader = require("./app/lib/utils/Reader");
const ExplorerService = require("./app/lib/services/ExplorerService");
const FizzbuzzService = require("./app/lib/services/FizzbuzzService");

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");
// console.log(explorers);
// console.log(explorers.length);

// Part 2: Get the quantity of explorers names in node

const explorersInNode = ExplorerService.filterByMission(explorers, "node");
// console.log(explorersInNode.length)

const amountExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
console.log(amountExplorers);

// Part4: Get the explorer"s usernames in Node
const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
console.log(usernames);

// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!

// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Score: 3, Trick: FIZZ.
// Score: 4, Trick: 4.
// Score: 5, Trick: 5.


const explorersFizzbuzz = explorersInNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersFizzbuzz);

