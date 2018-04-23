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
