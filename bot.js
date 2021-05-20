require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');
const path = require('path');

async run(message) {
  const { voice } = message.member

  if (!voice.channelID) {
    message.reply('You must be in a voice channel')
    return
  }

  voice.channel.join().then((connection) => {
    connection.play(path.join(__dirname, 'hal.webm'))
  })
}

// client.on('ready', () => {
//   console.log(`Logged in in ${client.user.tag}!`);
// });

// client.on('message', msg => {
//   if (msg.member.id === '276804557055721483') {
//     msg.react('👎');
//   }

//   if (msg.member.id === '140845637636718595') {
//     msg.react('👍');
//   }

//   if (msg.member.id === '140833262065942528') {
//     msg.react('<:niall2:413768442005553152>');
//   }

//   if (msg.member.id === '378702852786356224') {
//     msg.react('🐀');
//   }

//   if (msg.member.id === '184793319014924289') {
//     msg.react('<:dion2:413724324671782925>');
//   }

//   if (msg.member.id === '140833262065942528') {
//     msg.react('<:niall2:413768442005553152>');
//   }

//   if (msg.content === 'is edd a rat') {
//     msg.channel.send(
//       'I see absolutely no difference between edd and Stuart Little'
//     );
//   }

//   if (msg.content === 'is bray a shithole') {
//     msg.channel.send('yes, bray is shit.');
//   }

//   if (msg.content === 'test') {
//     const broadcast = client.voice.createBroadcast();
//     var channelId = msg.member.voice.channelID;
//     var channel = client.channels.cache.get(channelId);
//     channel.join().then(connection => {
//       broadcast.play(discordTTS.getVoiceStream('test 123'));
//       connection.play(fs.createReadStream('hal.webm'), { type: 'webm/opus' });
//     });
//   }
// });

client.login(process.env.BOT_TOKEN);
