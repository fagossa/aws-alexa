// full code is here: https://glitch.com/edit/#!/info-trafic-alexa-skill?path=README.md:1:0
var express = require("express");
var alexa = require("alexa-app");
var unirest = require('unirest');


var PORT = process.env.port || 8080;
var app = express();

var alexaApp = new alexa.app("message/receive");

var Phrases = {
  "Launch"    :'<say-as interpret-as="interjection">Mystère mystère</say-as> Bonsoir, bienvenu dans la soirée Alexa',
  "Help"      :'je suis là pour vous aidez, il suffit de me demander',
  "Stop"      :'You ask me to stop',
  "Error"     :"By the Hoary hosts of Hoggoth, I need you to try again.",
  "NotHeard"  :'What is it?  I suggest you try it again.',
  "NotFound"  :'Not found, how about you try something else.',
  "NoList"    :'No list has that name. You can try it again.',
  "Reprompt"  :'Lets give it another go.',
  "TakingTooLong":'Get on with it!'
};

alexaApp.express({expressApp: app, debug: true});

alexaApp.launch(function(request, res) {
  res.say(Phrases.Launch).shouldEndSession(false);
});

alexaApp.intent("AMAZON.HelpIntent",
  function(req, res) {
    res.say(Phrases.help).shouldEndSession(false);
  }
);

alexaApp.intent('getInfoTrafic',
  function(req, res) {
    var line = req.slots["metroLine"].value;
  
     return new Promise((resolve, reject) => {
        unirest.get('https://www.ratp.fr/meteo/ajax/data')
          .end(function (response) {
            var message = response.body.status.metro.lines[line].message;
            res.say("Voici l'état du trafic de la ligne " + line);
            res.say(message).shouldEndSession(false);
            resolve();
          });
      });  
  
  }
);

app.listen(PORT);

console.log("Listening on port " + PORT + ", try http://localhost:" + PORT + "/message/receive");
