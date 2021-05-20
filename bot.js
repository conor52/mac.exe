require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');
const path = require('path');

client.on('message', async message => {
  // Join the same voice channel of the author of the message
  if (message.member.voice.channel) {
    message.member.voice.channel
      .join()
      .then(connection => {
        const dispatcher = connection.playFile('Example.mp3');
        dispatcher.on('end', end => {
          voiceChannel.leave();
        });
      })
      .catch(err => console.log(err));
  }
});

// client.on('ready', () => { /
//   console.log(Logged in in ${client.user.tag}!);
// });

// client.on('message', msg => {
//   if (msg.member.id === '276804557055721483') {
//     msg.react('');
//   }

//   if (msg.member.id === '140845637636718595') {
//     msg.react('');
//   }

//   if (msg.member.id === '140833262065942528') {
//     msg.react(':niall2:');
//   }

//   if (msg.member.id === '378702852786356224') {
//     msg.react('');
//   }

//   if (msg.member.id === '184793319014924289') {
//     msg.react(':dion2:');
//   }

//   if (msg.member.id === '140833262065942528') {
//     msg.react(':niall2:');
//   }

//   if (msg.content === 'is edd a rat') {
//     msg.channel.send(
//       'I see absolutely no difference between edd and Stuart Little'
//     );
//   }

//   if (msg.content === 'is bray a shithole') {
//     msg.channel.send('yes, bray is shit.');
//   }
// });

client.login(process.env.BOT_TOKEN);
