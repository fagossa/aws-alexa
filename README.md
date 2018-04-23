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

voir démo: [ci-contre](http://goo.gl/pDeLZy)
[glitch](glitch.com): editeur en ligne, hot reload, back-end ...
`new alexa.app("message/receive")` => uri vers laqeuele on pointe

dans l'espace officiel, simulateur pour tester le FR
avec le SDK Amazon, parsing du message, validation du format.
ssml => langage de markup pour rajouter de l'émotion à un message.




