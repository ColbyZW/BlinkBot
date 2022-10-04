import {REST, Routes} from "discord.js";
import path from "node:path";
import fs from "node:fs";


export default function registerCommands(token: string, client_id: string): void {
	//Array to hold our commands
	const commands = [];
	//Get the file path for the command directory
	const commandPath = path.join(__dirname, 'commands');
	//Get the all the command files
	const commandFiles = fs.readdirSync(commandPath).filter((file: string) => file.endsWith(".ts"));
	for (const file of commandFiles) {
		//Create the full file path for each command
		const filePath = path.join(commandPath, file);
		//Require the command
		const command = require(filePath);
		//Get the commands name (file name minus the file extension)
		const commandName = file.slice(0,-3);
		//Add the command to the command array
		commands.push(command[commandName]);
	}

	//Initialize the REST API
	const rest = new REST({ version: '10'}).setToken(token);

	//Function to register the commands
	(async () => {
		try {
			console.log("Registering commands");
			await rest.put(Routes.applicationCommands(client_id), {body: commands});
			console.log("Registered commands");
		} catch (err) {
			console.log("Something broke");
			console.log(err);
		}
	})();
}
