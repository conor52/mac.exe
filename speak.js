const say = require('say');

say.export('Hello Virgins', 'Alex', 1.0, 'hal.wav', err => {
  if (err) {
    return console.error(err);
  }

  console.log('Text has been saved to hal.wav.');
});
