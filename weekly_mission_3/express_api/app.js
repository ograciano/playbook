const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.get('/v1/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`);
    const explorer1 = { id: 1, name: "Oscar1" }
    const explorer2 = { id: 2, name: "Oscar2" }
    const explorer3 = { id: 3, name: "Oscar3" }
    const explorer4 = { id: 4, name: "Oscar4" }
    const explorers = [explorer1, explorer2, explorer3, explorer4];
    res.status(200).json(explorers);
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);
    const explorer = { id: req.params.id, name: "Oscar" }
    res.status(200).json(explorer);
})

app.post('/', function (req, res) {
    res.send('POST request to the homepage')
})

app.post('/v1/explorers', (req, res) => {

    // payloadBody = {
    //     "explorer": "Oscar",
    //     "usuario": "ograciano",
    //     "repo": "playbook"
    // }
    console.log(`Api Explorers POST request ${new Date()}`);
    const requestBody = req.body // parametros del cliente
    res.json({ requestBody, msg: "Crated" });
});

app.put('/v1/explorers/:id', function (req, res) {
    console.log(`Api Explorer PUT request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const { id } = req.params;
    const requestBody = req.body;
    res.status(200).json({ id, requestBody, msg: 'Updated!' })
});

app.delete('/v1/explorers/:id', function (req, res) {
    console.log(`Api Explorer DELETE request ${new Date()}`);
    console.log(`DELETE explorer with id ${req.params.id}`);
    const { id } = req.params;
    res.status(200).json({ msg: `Resgistro eliminado con id: ${id}` })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))