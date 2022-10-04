import {CacheType, GuildMemberRoleManager, Interaction} from "discord.js";

export default function rolesHandler(interaction: Interaction<CacheType>) {
	if(interaction.isChatInputCommand()) {
		const role = interaction.options.getString("role");
		if(!role) return;
		const roles = interaction.member!.roles as GuildMemberRoleManager;
		if(!roles) return;
		interaction.reply(`Added you to role ${role}`);
	}
}
