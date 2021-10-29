const { Client, Intents } = require("discord.js");
const botConfig = require("./botConfig.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("Promotion Island", { type: "PLAYING" });
});

client.on("messageCreate", message => {

    if(message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (command == `${prefix}new`) {
        return message.channel.send("Welcome to our server! Pls check our Information channel :)")
    }

});

client.login(process.env.token);
