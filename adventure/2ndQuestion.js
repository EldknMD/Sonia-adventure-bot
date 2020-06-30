exports.run = (client, message, Discord, fs) => {
    var path = fs.readFileSync("./temp/jsonsavebasefile.json", "utf8");
    console.log(path);
    saved = JSON.parse(path);
    console.log(saved.language);
    console.log(saved.gender);
    console.log(saved.origin);
    message.channel.send("Very well, "+ message.author.username +" Where do you came from?")
    .then(() => {
        message.channel.awaitMessages(response => response.content, {
          max: 1,
          time: 60000,
          errors: ['time'],
        })
        .then((collected) => {
          switch (collected.first().content) {
            case "kanto":
            case "Kanto":
                var RegAns = 1
                console.log(RegAns)
                break;
            case "Johto":
            case "johto":
                var RegAns = 2
                console.log(RegAns)

                break;
            case "Hoenn":
            case "hoenn":
            var RegAns = 3
            console.log(RegAns)

                 break;
            case "Sinnoh":
            case "sinnoh":
                var RegAns = 4
                console.log(RegAns)

                break;
            case "Unova":
            case "unova":
                var RegAns = 5
                console.log(RegAns)

                break;
            case "Kalos":
            case "kalos":
                var RegAns = 6
                console.log(RegAns)

                break;
            case "Alola":
            case "alola":
            var RegAns = 7
            console.log(RegAns)

                break;
            case "Galar":
            case "Galar":
            var RegAns = 8
            console.log(RegAns)

                break;
            default: 
            var RegAns = 0
            console.log(RegAns)

            break;
          }})
          .catch(() => {
            var RegAns = 0
            console.log(RegAns)

          });
      });    
    };