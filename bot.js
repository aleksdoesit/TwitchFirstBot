const tmi = require('tmi.js');

const opts = {

  identity: {

    username: "TreasonBot",
    password: "oauth:f0glv5qm5bs9m2m9869u5rysh7iwhd"

  },
  channels: [

    "AleksDoesIt",
    "TreasonBot"

  ]

}

onMessageHandler = (target, context, msg, self) => {
  
  if (self) { return; }
  
  const commandName = msg.trim();

  switch (commandName) {

    case '!dice':

      const num = rollDice();
      client.say(target, `You rolled a ${num}`);
      console.log(`* Executed ${commandName} command`);

      break;
    
    case '!d20':

      const num20 = rollD20();
      client.say(target, `You rolled a ${num20}`);
      console.log(`* Executed ${commandName} command`);

      break;

    case '!about':

      const portfolioUrl = 'https://imaleks.dev/';
      client.say(target, `Bot designed by ${portfolioUrl}`)
      console.log(`* Executed ${commandName} command`)

      break;

  }
}

rollDice = () => {
  
  const sides = 6;
  return Math.floor(Math.random() * sides) +1;
  
}

rollD20 = () => {

  const sides = 20;
  return Math.floor(Math.random() * sides) + 1;

}

intervalMessages = (target, context, msg, self) => {

  const socialUrl = 'https://twitter.com/ItsAleksNikolic || https://www.instagram.com/casadialeks/'
  setInterval(() => {
    client.say('AleksDoesIt', `Let's connect! ${socialUrl}`)
    console.log(`* Executed Interval Message`)
  }, 28000);

  setInterval(() => {
    client.say('AleksDoesIt', `If you're enjoying the stream please consider following :)`)
    console.log(`* Executed Interval Message`)
  }, 20000);

}

onConnectedHandler = (addr, port) => {
  
  console.log(`* Connected to ${addr}:${port}`)
  
}

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
client.on('connected', intervalMessages)

client.connect();