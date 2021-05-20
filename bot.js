require('dotenv').config();

const discord = require('discord.js');
const client = new discord.Client();
const fs = require('fs');

client.on('message', async message => {
  // Join the same voice channel of the author of the message
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();

    // Create a dispatcher
    const dispatcher = connection.play(fs.createReadStream('C:\Users\conor_mf0f\Dropbox\Vs code projects\mac.exe\Example.ogg'), {
      type: 'ogg/opus',
    });

    dispatcher.on('start', () => {
      console.log('audio.mp3 is now playing!');
    });

    dispatcher.on('finish', () => {
      console.log('audio.mp3 has finished playing!');
    });

    // Always remember to handle errors appropriately!
    dispatcher.on('error', console.error);
  }
});

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
// });

client.login(process.env.BOT_TOKEN);
