const Reader = require("../utils/Reader");
const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");

class ExplorerController {
    static getExplorerByMission(mission = "") {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission = "") {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission = "") {
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getFizzbuzzByNumber(numero = 0) {
        return FizzbuzzService.applyValidationInNumber(numero);
    }

    static getExplorersByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersByStack(explorers, stack);
    }
}

module.exports = ExplorerController;