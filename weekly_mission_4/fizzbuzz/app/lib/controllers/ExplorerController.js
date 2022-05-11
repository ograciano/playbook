const TelegramBot = require("node-telegram-bot-api");

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

    static telegramBot(bot = TelegramBot) {
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = this.getFizzbuzzByNumber(numberToApplyFb);
                const responseBot = `Tu numero es: ${numberToApplyFb}. validacion: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else if (msg.text == "java" || msg.text == "node") {
                const mission = msg.text;
                const names = "";
                const usernames = this.getExplorersUsernamesByMission(mission);
                const users = usernames.join('\n')
                const message = "Tu lista de usuarios es: \n" + users;
                bot.sendMessage(chatId, message);
            } else {
                bot.sendMessage(chatId, "Envia un numero valido o termino valiido");
            }
        });
    }

}



module.exports = ExplorerController;