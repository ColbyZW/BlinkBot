import {CacheType, Interaction} from "discord.js";

export default function pingHandler(interaction: Interaction<CacheType>) {
	if(interaction.isChatInputCommand()) {
		interaction.reply("Pong!");
	}
}
