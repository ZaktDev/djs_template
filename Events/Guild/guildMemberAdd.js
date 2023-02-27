const { EmbedBuilder } = require("@discordjs/builders");
const {GuildMember} = require("discord.js");

module.exports = {
  name: "guildMemberAdd",

  async execute(member) {
    const {user, guild} = member;
    const c = await guild.channels.cache.get("")
    const welcomeMessage = `Bienvenido <@${member.id}>`;
    
    const welcomeEmbed = new EmbedBuilder()
    .setColor(0x4ea3f7)
    .setDescription(welcomeMessage)
    .addFields(
      { name:'Miembros:', value: `${guild.memberCount}` }
    )
    .setTimestamp();


    memberLogs.send({embeds: [welcomeEmbed]});
    console.log(`${member.id} joined the guild.`)
  },
};
