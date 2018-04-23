https://alexa.amazon.co.uk/

# alexa.amazon.co.uk
Backend to configure devices

# Alexa
this is a backend to all devices!

```
  alexa <-- device1
   / \
    |
    ------- device N
```

# skill
Applications developed for alexa
Not yet a french store (later on 2018), we can have dev mode applications

You can change the `trigger word`, some alternatives `Alexa`, `Echo`, `amazon`, `computer`.

## How to trigger an application (skill)?

```
trigger word + action + skill
```

You can change the trigger word in `alexa.amazon.co.uk`

The voice is registered only the trigger word is recorded!

## Skill life cycle

```
person -> device -> alexa cloud service -> your skill
                          |
                           ----> amazon developer portal
                                     |
                                      ----> Intentions (e.g. open, stop, next)
                                      ----> Learning phrases
                                      ----> Parameters
```

developper.amazon.com/skills

## Intent 

Amazon oblige les intents pour une UX intéressante: stopIntent, cancelIntent, helpIntent

amazon ask: outil en ligne de commande pour Alexa
aide au déploiement

voir démo: sur [glitch](http://goo.gl/pDeLZy)

Glitch: editeur en ligne, hot reload, back-end(nodejs) ...

`new alexa.app("message/receive")` => uri vers laqeuele on pointe

dans l'espace officiel, simulateur pour tester le FR

avec le SDK Amazon, parsing du message, validation du format.

ssml => langage de markup pour rajouter de l'émotion à un message.

### Parameters

Intents can have parameters

> l'état du trafic du métro {metroline}

If the parameter is a contraint of values, you need to create an `slot type` (e.g. metroline) to define the actual values

## SSML

The language [ssml](https://developers.google.com/actions/reference/ssml) allow us to add feelings and effets to the responses. It is supported by AWS, google and microsoft.

```xml
<speak>
  Here are <say-as interpret-as="characters">SSML</say-as> samples.
  I can pause <break time="3s"/>.
  I can play a sound
  <audio src="https://www.example.com/MY_MP3_FILE.mp3">didn't get your MP3 audio file</audio>.
  I can speak in cardinals. Your number is <say-as interpret-as="cardinal">10</say-as>.
  Or I can speak in ordinals. You are <say-as interpret-as="ordinal">10</say-as> in line.
  Or I can even speak in digits. The digits for ten are <say-as interpret-as="characters">10</say-as>.
  I can also substitute phrases, like the <sub alias="World Wide Web Consortium">W3C</sub>.
  Finally, I can speak a paragraph with two sentences.
  <p><s>This is sentence one.</s><s>This is sentence two.</s></p>
</speak>
```
