// import essential stuff from discord.js and config.js
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// make an instance of the client
const client = new Client({ intents: ["GUILDS"] });

// the debug to see if the client is ready
client.once('ready', () => {
    console.log('Ready!');
});

// login the client
client.login(token);