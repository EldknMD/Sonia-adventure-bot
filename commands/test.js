exports.run = (client, message, Discord, fs) => {
var path = fs.readFileSync("./temp/jsonsavebasefile.json", "utf8");
console.log(path);
saved = JSON.parse(path);
console.log(saved.language);
console.log(saved.gender);
console.log(saved.origin);
message.channel.send("Hey, "+ message.author.username +"! Select your language, please: English or spanish?")
.then(() => {
    message.channel.awaitMessages(response => response.content, {
      max: 1,
      time: 60000,
      errors: ['time'],
    })
    .then((collected) => {
      switch (collected.first().content) {
        case "esp":
        case "Español":
        case "español":
        case "spa":
        case "Spa":
        case "spanish":
        case "Spanish":
        message.channel.send(`¡Muchas muchas gracias!`);
        var lang = "spanish";
        saved.language = lang
        console.log("the selectes language is:" + saved.language)
        newSaved= JSON.stringify(saved)
        fs.writeFile("./temp/jsonsavebasefile.json",newSaved, function(err) {
            if (err) return console.log(err);
        let adventure = require(`../adventure/2ndQuestion.js`);
          adventure.run(client, message, Discord, fs);
        });
        break;
        case "Ing":
        case "ing":
        case "Eng":
        case "eng":
        case "inglés":
        case "Inglés":
        case "Ingles":
        message.channel.send(`Thank you so much! `);
        var lang = "english";
        saved.language = lang
        console.log("the selectes language is:" + saved.language)
        newSaved= JSON.stringify(saved)
        fs.writeFile("./temp/jsonsavebasefile.json",newSaved, function(err) {
            if (err) return console.log(err);
        });
        let adventure = require(`./adventure/2ndQuestion.js`);
          adventure.run(client, message, Discord, fs);

        break;
        default:
        message.channel.send(`Restart. Can't read that.`);
      }})
      .catch(() => {
        message.channel.send("Out of time. Try again.");
      });
  });

};