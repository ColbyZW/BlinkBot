import { SlashCommandBuilder } from "discord.js";

export const roles = new SlashCommandBuilder()
	.setName("roles")
	.setDescription("Assign yourself a role within the server")
	.addStringOption(option =>
		option.setName("role")
			.setDescription("The role you want to assign")
			.setRequired(true)
			.addChoices(
				{ name: "Javascript", value: "Javascript"},
				{ name: "C / C++", value: "C / C++"},
				{ name: "Java", value: "1026652209091448862"})
					);
