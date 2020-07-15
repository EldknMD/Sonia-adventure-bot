exports.run = (client, message, Discord, fs) => {
    savebase = JSON.parse(require ("../temp Json/jsonsavebasefile.json"));
    var playerNamejson = message.author.username + ".json";
    var path = "saves/" + playerNamejson;
    fs.writeFile(path, savebaseobject, function (err) {   // JSON maker
        if (err) throw err;
        console.log('JSON created"!');

    message.channel.send("Welcome "+ message.author.username +"! Select your language, please: English or spanish?")
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
            var language = "spanish";
            JSON.stringify=(language);
            fs.writeFile= message.author.username+".json", language, function(err) {
              if (err) return console.log(err);
          };
            break;

            case "Ing":
            case "ing":
            case "Eng":
            case "eng":
            case "inglés":
            case "Inglés":
            case "Ingles":
            message.channel.send(`Thank you so much! `);
            var language = "english";
            savebasedobject.language = language
            break;
            default:
            message.channel.send(`Restart. Can't read that.`);
          }})
          .catch(() => {
            message.channel.send("Out of time. Try again.");
          });
      })
})
};