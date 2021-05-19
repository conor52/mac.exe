const say = require('say');

function tts(voiceChannel, text) {
    if (!FS.existsSync('./temp')){
        FS.mkdirSync('./temp');
    }
    const timestamp = new Date().getTime();
    const soundPath = `./temp/${timestamp}.wav`;
    say.export(text, null, 1, soundPath, (err) => {
        if (err) {
            console.error(err);
            return;
        }else{
            voiceChannel.join().then((connection) => {
                connection.playFile(soundPath).on('end', () => {
                    connection.disconnect();
                    FS.unlinkSync(soundPath);
                }).on('error', (err) => {
                    console.error(err);
                    connection.disconnect();
                    FS.unlinkSync(soundPath);
                });
            }).catch((err) => {
                console.error(err);
            });
        }
    });
}
