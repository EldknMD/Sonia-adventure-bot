exports.run = (client, message, Discord, fs) => {
var playerNametxt = message.author.username + ".txt"
var path = "saves/" + playerNametxt
    message.channel.send("Hey! Have a nice day :3");
    fs.writeFile(path, "test text.", function (err) {
        if (err) throw err;
        console.log('Saved!');

    })};
    