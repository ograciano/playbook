const { request, response } = require("express");
const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");

const app = express();
app.use(express.json());
const port = 3000;

// app.get("/", (req, res = response) => {
//     res.json({ msg: "Fizzbuzz api Welcome" });
// });

app.get("/v1/explorers/:mission", (req = request, res = response) => {
    const { mission } = req.params;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req = request, res = response) => {
    const { mission } = req.params;
    const amountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    res.json({ mission, quantity: amountInMission });
});

app.get("/v1/explorers/username/:mission", (req = request, res = response) => {
    const { mission } = req.params;
    const usernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({ mission, usernames: usernamesInMission });
});

app.get("/v1/fizzbuzz/:number", (req = request, res = response) => {
    const { number } = req.params;
    const fizzbuzzResult = ExplorerController.getFizzbuzzByNumber(number);
    res.json({ score: number, trick: fizzbuzzResult });
});

app.get("/v1/explores/stack/:stack", (request, response) => {
    const {stack} = request.params
    const stacks = ExplorerController.getExplorersByStack(stack);
    response.json({stack, explorers: stacks});
});

app.listen(port, () => console.log(`Fizzbuzz API in localhost:${port}`));