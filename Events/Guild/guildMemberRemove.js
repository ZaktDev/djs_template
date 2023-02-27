const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember } = require("discord.js");


module.exports = {
  name: "guildMemberRemove",

  async execute(member) {
    const {user, guild} = member;
    const c = member.guild.channels.cache.get('');
    const leaveMessage = `<@${member.id}> se fue.`;
    
    const leaveEmbed = new EmbedBuilder()
    .setColor(0xf54242)
    .setDescription(leaveMessage)
    .addFields(
      { name:'Miembros:', value: `${guild.memberCount}` }
    )
    .setTimestamp();

    c.send({embeds: [leaveEmbed]});
  },
};
