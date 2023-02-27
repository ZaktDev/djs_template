const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName('cc')
  .setDescription('Remove certain amount of messages')
  .addIntegerOption(option =>
		  option.setName('amount')
			.setDescription('Amount of messages to be deleted.')
			.setRequired(true)
    ),
  async execute(interaction, client) {
    const amount = interaction.options.getInteger('amount')

    if (amount > 100)
      return interaction.followUp({
          content: "Maximum amount of messages is 100."
      });

   const messages = await interaction.channel.messages.fetch({
     limit: amount +1,
   });

   const filtered = messages.filter((msg) => Date.now() - msg.createdTimestamp < ms('14 days'));

   await interaction.channel.bulkDelete(filtered);

   const succesEmbed = new EmbedBuilder()
   .setColor(0x32a852)
   .setTitle(":white_check_mark: Succes!")
   .setDescription(`Succesfully deleted ${filtered.size - 1} message(s).`)

   await interaction.reply({
     embeds: [succesEmbed]
   });
   await setTimeout(() => { interaction.deleteReply() }, 3500);
  }

}
