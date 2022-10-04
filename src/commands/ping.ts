import {SlashCommandBuilder} from "discord.js";

export const ping = new SlashCommandBuilder()
	.setName("ping")
	.setDescription("Pong");
