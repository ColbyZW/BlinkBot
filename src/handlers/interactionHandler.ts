import {CacheType, Interaction} from "discord.js";
import pingHandler from "./pingHandler";
import rolesHandler from "./rolesHandler";

/**
 * Class to handle interactions from slash commands
 */
export class InteractionHandler {

	private interaction: Interaction<CacheType>;

	constructor(interaction: Interaction<CacheType>) {
		this.interaction = interaction;
		this.handleInteraction();
	}

	private handleInteraction() {
		if(!this.interaction.isChatInputCommand()) {
			return;
		}
		switch (this.interaction.commandName) {
			case "ping":
				pingHandler(this.interaction);	
				break;
			case "roles":
				rolesHandler(this.interaction);
				break;
		}
	}
}
