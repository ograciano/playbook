require('dotenv').config();
const Trello = require("trello");

if(!process.env.TOKEN && !process.env.KEY ) {
    throw new Error('No hay configuracion con Api Key y con Token');
}

let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`

trello.addCard(cardTitle, "LaunchX Card Description", "62794688de336c4bcc748ce2",
	 (error, trelloCard) => {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});