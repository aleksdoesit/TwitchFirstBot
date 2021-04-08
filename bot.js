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
  
  if (commandName === '!dice') {
    
    const num = rollDice();
    
    client.say(target, `You rolled a ${num}`);
    
    console.log(`* Executed ${commandName} command`);
    
  } else if (commandName === '!d20') {

    const num = rollD20();

    client.say(target, `You rolled a ${num}`);

    console.log(`* Executed ${commandName} command`);

  } else {
    
    console.log(`* Unknown command ${commandName}`)
    
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

onConnectedHandler = (addr, port) => {
  
  console.log(`* Connected to ${addr}:${port}`)
  
}

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();