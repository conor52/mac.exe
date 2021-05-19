require('dotenv').config();

const discord = require('discord.js');
const discordTTS = require('discord-tts');
const client = new discord.Client();

client.on('ready', () => {
  console.log(`Logged in in ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'say test 123') {
    const broadcast = client.voice.createBroadcast();
    var channelId = msg.member.voice.channelID;
    var channel = client.channels.cache.get(channelId);
    channel.join().then(connection => {
      broadcast.play(discordTTS.getVoiceStream('test 123'));
      const dispatcher = connection.play(broadcast);
    });
  }
});

client.login(process.env.BOT_TOKEN);
