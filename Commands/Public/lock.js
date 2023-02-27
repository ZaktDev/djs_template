const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
  PermissionsBitField
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lock")
    .setDescription("locks channel")
    .addChannelOption((option) =>
      option.setName("channel").setDescription("Select a channel")
      .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction, client) {
    const channel = interaction.options.getChannel("channel");

    const succesEmbed = new EmbedBuilder()
      .setColor(0xd98832)
      .setTitle(":lock: Locked!")
      .setDescription(`Channel succesfully locked.`);

    await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, {
      SendMessages: false,
      AttachFiles: false,
    });

    await channel.permissionOverwrites.edit(
      "1008745719705907241",
      {
        SendMessages: true,
        AttachFiles: true,
      }
    );

    await interaction.reply({
      embeds: [succesEmbed],
    });
  },
};
