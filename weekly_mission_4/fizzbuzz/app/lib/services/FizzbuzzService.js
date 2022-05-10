

class FizzbuzzService {
    static applyValidationInExplorer(explorer = {}) {
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
            
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;

        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    }

    static applyValidationInNumber(numero = 0) {
        if (numero % 5 === 0 && numero % 3 === 0) {
            return "FIZZBUZZ";
        } else if (numero % 3 === 0) {
            return "FIZZ";    
        } else if (numero % 5 === 0) {
            return "BUZZ";
        } else {
            return numero;
        }
    }
}

module.exports = FizzbuzzService;