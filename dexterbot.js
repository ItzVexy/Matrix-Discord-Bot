const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}#${client.user.discriminator}!`);
    client.user.setGame(`/help | ${client.guilds.size} servers`);
});

client.on('message', msg => {

    if (msg.content === '/help') {
        msg.reply('**My Commands:** /video, /developers, /youtuber')
    }

});

client.login('process.env.BOT_TOKEN')
