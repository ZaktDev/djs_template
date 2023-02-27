const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName('cc')
  .setDescription('Borra una cierta cantidad de mensajes.')
  .addIntegerOption(option =>
		  option.setName('cantidad')
			.setDescription('Cantidad de mensajes que se borraran.')
			.setRequired(true)
		    	.setMaxValue(99)
		    	.setMinValue(1)
    ),
  async execute(interaction, client) {
    const amount = interaction.options.getInteger('cantidad')

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
   .setDescription(`Correctamente borrado(s) ${filtered.size - 1} mensaje(s).`)

   await interaction.reply({
     embeds: [succesEmbed]
   });
   await setTimeout(() => { interaction.deleteReply() }, 3500);
  }

}
