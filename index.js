var express = require("express");
var alexa = require("alexa-app");

var PORT = process.env.port || 8080;
var app = express();

var alexaApp = new alexa.app("message/receive");

var Phrases = {
  "Launch"    :'Hello ! welcome to this TachLab',
  "Help"      :'You ask for help',
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
  res.say(Phrases.Launch).shouldEndSession(false).send();
});

// Exemple :
/*
alexaApp.intent("AMAZON.HelpIntent",
  function(req, res) {
    res.say("Yes i'm here for that, ask me any things").shouldEndSession(false).send();
  }
);
*/

// Exemple :
/*
alexaApp.intent('getInfoTrafic',
  function(req, res) {
    console.log(JSON.stringify(req));
    res.say("état du trafic").send();
  }
);
*/

app.listen(PORT);

console.log("Listening on port " + PORT + ", try http://localhost:" + PORT + "/message/receive");
