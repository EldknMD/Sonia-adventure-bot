exports.run = (client, message, Discord, fs) => {
var path = fs.readFileSync("./saves/jsonsavebasefile.json", "utf8");
saved = JSON.parse(path);

console.log(path);
console.log(saved.language);
console.log(saved.gender);
console.log(saved.origin);

function saveandnext(input) {
saved.language = input
  newSaved= JSON.stringify(saved)
  console.log(newSaved)
  var namefile = message.author.username
  fs.writeFile("./saves/"+ namefile +".json",newSaved, function(err) {
    if (err) return console.log(err)
  });
};
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
        saveandnext(lang)
        let adventure = require(`../adventure/2ndQuestion.js`);
        adventure.run(client, message, Discord, fs);
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
        saveandnext(lang);
        let adventureeng = require(`./adventure/2ndQuestion.js`);
          adventureeng.run(client, message, Discord, fs);

        break;
        default:
        message.channel.send(`Restart. Can't read that.`);
      }})
      .catch(() => {
      });
  })
};