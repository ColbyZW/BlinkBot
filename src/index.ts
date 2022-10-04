import { Client, GatewayIntentBits } from "discord.js"
import registerCommands from "./register";
import { InteractionHandler } from "./handlers/interactionHandler";
require("dotenv").config();

//Replace this with our discord token
const token = process.env.TOKEN;
const client_id = process.env.CLIENT_ID;

//Register the slash commands
registerCommands(token!, client_id!);

const client = new Client({
	intents: [ GatewayIntentBits.Guilds ]
})

client.on("ready", () => {
	console.log(`Logged in as ${client.user?.tag}`);
})

//Listeners for specific events
client.on("interactionCreate", async interaction => {
	new InteractionHandler(interaction);
})

client.login(token)
