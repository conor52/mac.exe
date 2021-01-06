require("dotenv").config()


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in in ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.member.id === "140845637636718595") {
    msg.react("👎")
  }
});



client.login(process.env.BOT_TOKEN)