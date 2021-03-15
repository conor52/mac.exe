require("dotenv").config()


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in in ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.member.id === "276804557055721483") {
    msg.react("👎")
  }

  if (msg.member.id === "140845637636718595") {
    msg.react("👍")
  }
  
  if (msg.member.id === "784592080051765278") {
    msg.react(":niall2:")
  }

  if (msg.content === 'is edd a rat') {
    msg.channel.send('I see absolutely no difference between edd and Stuart Little');
  }

  if (msg.content === 'is bray a shithole') {
    msg.channel.send('yes, bray is shit.');
  }

  
});



client.login(process.env.BOT_TOKEN)
