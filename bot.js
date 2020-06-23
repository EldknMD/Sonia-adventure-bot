console.log('Test1');           // Sequential logging for every important dependence.
console.log('Test2');
console.log('Test3');
const config = require('./config.json');
const fs = require('fs');
console.log('config.JSON file ready');
console.log('Waiting...');
const Discord = require('discord.js');
const client = new Discord.Client();
console.log('Discord variables on!');
console.log('Online!'); //End of startup logging

client.on("message", function (message) {
  if (message.author.equals(client.user)) return; // Ignores itself
  if (message.channel.type === 'dm') return message.reply("Pokémon world is for everyon.  Please use the public chat."); // Ignores dms
});
client.on("guildMemberAdd", (member) => {       //New members welcome message
   console.log(`User: ${member.user.username} has joined ${member.guild.name}`);
   var canal = client.channels.get("X"); //Replace the X (not the quotes) with the Welcome channel on your server.
   var welcomeMessage = new Discord.RichEmbed()
                        .setTitle("Welcome, "+ member.user.username + "!")
                        .setDescription("Please feel like you're at home")
                        .setColor("#ffa420")
                        .setImage("https://i.ibb.co/VN65HjX/image.png")
                        .setThumbnail(member.user.displayAvatarURL)
                        .setFooter("Let me know anything you want to know typing >help", "https://i.ibb.co/KDYybj5/soniapokemon.jpg"); 

   canal.send(welcomeMessage);
});

client.on("message", function (message) {
if (message.content === 'hello') {      //The bot will react to "hello" with an emoji. Unicode emojis are easier to add, but not mandatory.
	message.react("😎");}
});
client.on("message", function (message) {
if (message.content === 'good bye') {
	message.react("😽");}
});
client.on("message", function (message) {
if (message.content === "on a mote of dust, suspended in a sunbeam") {
	message.react("⭐");
	message.react("🌌");
	message.react("☀");
}});

const botStateArray = [
    "Writting a very long essay about galarian history", 
    "with Yamper!",
    "Where do you think is the next clue?", 
    "I know internet loves me... in a very strange way..."
    ]; // this array contains the former "activity" info of the bot. As it starts, by default, as "playing (your state)", I usually use this word as part of the state message. Ex: Playing the piano; playing chess!, etc.

client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (botStateArray.length - 1) + 1); // Generates a number between 1 and the botStateArray length.
        client.user.setActivity(botStateArray[index]); // defines bot's activity as a product between the random number and the array itself
    }, 10000); // time between state changes in miliseconds.
});

//  COMMAND SECTION
client.on("message", message => {
  if (message.author.bot) return; // Don't receive orders from other bots. Important good practice on Discordjs
  if (message.channel.type === 'dm') return; // don't receive commands by dm's. 
    if (!message.content.startsWith(config.prefix)){// Does the command start with the prefix declared in config.JSON?

    }else{//user IS typing a command
    //splits input to commands
      let command = message.content.split(' ')[0];
      command = command.slice(config.prefix.length);  
      try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, Discord, fs);
      } catch (err) {
        console.log(err);
        client.users.get(config.ownerID).send(`${err}`); //Dm's you the error info. You can delete this if you want, but is always useful have an error log.
        return;
      }
    }
  }
);
client.login(config.token); //discord token allows the bot to connect Discord API and intereact with the platform. NEVER PUBLISH OR SHARE IT. You can always enter you discord dev account and reset the token.