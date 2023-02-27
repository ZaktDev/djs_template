const {Client} = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  
  async execute(client) {
    console.log(`${client.user.username} se inicio.`);
  },
};
