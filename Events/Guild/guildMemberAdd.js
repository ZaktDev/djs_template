const { EmbedBuilder } = require("@discordjs/builders");
const {GuildMember} = require("discord.js");

module.exports = {
  name: "guildMemberAdd",

  async execute(member) {
    const {user, guild} = member;
    const c = member.channels.cache.get("")
    const welcomeMessage = `Bienvenido <@${member.id}>`;
    
    const welcomeEmbed = new EmbedBuilder()
    .setColor(0x4ea3f7)
    .setDescription(welcomeMessage)
    .addFields(
      { name:'Miembros:', value: `${guild.memberCount}` }
    )
    .setTimestamp();


    c.send({embeds: [welcomeEmbed]});
  },
};
