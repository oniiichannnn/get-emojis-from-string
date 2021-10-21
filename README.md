# What is this?
A package for getting emojis out from your strings, this works with Discord emojis too!

# Returns
Returns a array, if none emojis are in the string, it will return a empty array

**Discord Emoji:**
```js
  [
    {
      name    : 'emoji_1',       // The name of the emoji
      id      : '123',           // The ID of the emoji
      animated: true,            // Is the emoji a nitro emoji
      image   : 'https://cdn.discordapp.com/emojis/123.gif?v=1', // The image of the emoji (returns a gif if its a nitro emoji)
      type    : 'Discord Emoji'  // The type of emoji this is
    }
  ]
```

**Default Emoji:**
```js
  [
    {
      name     : '❤',           // The emoji of the default emoji
      id       : '❤',           // The emoji of the default emoji
      animated : false,           // Always false
      image    : "https://twemoji.maxcdn.com/v/13.1.0/72x72/2764.png", // Image for the emoji
      type     : 'Default Emoji'  // The type of emoji this is
    }
  ]
```

Examples:
```js
let getEmojis = require("get-emojis-from-string")
console.log(getEmojis("hello ❤️"))

/*
  [
    {
      name: '❤',
      id: '❤',
      animated: false,
      image: "https://twemoji.maxcdn.com/v/13.1.0/72x72/2764.png",
      type: 'Default Emoji'
    }
  ]
*/
```
```js
let getEmojis = require("get-emojis-from-string")
console.log(getEmojis("Discord partner emoji <a:PARTNERED_SERVER_OWNER:857501148532965396> Discord verified <:verified:780972928123928597>"))
/*
  [
    {
      name: 'PARTNERED_SERVER_OWNER',
      id: '857501148532965396',
      animated: true,
      image: 'https://cdn.discordapp.com/emojis/857501148532965396.gif?v=1',
      type: 'Discord Emoji'
    },
    {
      name: 'verified',
      id: '780972928123928597',
      animated: false,
      image: 'https://cdn.discordapp.com/emojis/780972928123928597.png?v=1',
      type: 'Discord Emoji'
    }
  ]
*/
```
```js
let getEmojis = require("get-emojis-from-string")
console.log(getEmojis("❤️ Discord partner emoji <:PARTNERED_SERVER_OWNER:857501148532965396> Discord verified <:verified:780972928123928597>"))
/*
  [
    {
      name: '❤',
      id: '❤',
      animated: false,
      image: "https://twemoji.maxcdn.com/v/13.1.0/72x72/2764.png",
      type: 'Default Emoji'
    },
    {
      name: 'PARTNERED_SERVER_OWNER',
      id: '857501148532965396',
      animated: false,
      image: 'https://cdn.discordapp.com/emojis/857501148532965396.png?v=1',
      type: 'Discord Emoji'
    },
    {
      name: 'verified',
      id: '780972928123928597',
      animated: false,
      image: 'https://cdn.discordapp.com/emojis/780972928123928597.png?v=1',
      type: 'Discord Emoji'
    }
  ]
*/
```

## Options
There are only 2 options: `onlyDiscordEmojis` and `onlyDefaultEmojis`. `onlyDiscordEmojis` will only return Discord emojis, `onlyDefaultEmojis` will only return default emojis. Both is set to `false` by default
````js
let getEmojis = require("get-emojis-from-string")

let messageContent = "❤️ Discord partner emoji <:PARTNERED_SERVER_OWNER:857501148532965396> Discord verified <:verified:780972928123928597>"

console.log(getEmojis(messageContent, { onlyDiscordEmojis: true }))
/*
  [
    {
      name: 'PARTNERED_SERVER_OWNER',
      id: '857501148532965396',
      animated: false,
      image: 'https://cdn.discordapp.com/emojis/857501148532965396.png?v=1',
      type: 'Discord Emoji'
    },
    {
      name: 'verified',
      id: '780972928123928597',
      animated: false,
      image: 'https://cdn.discordapp.com/emojis/780972928123928597.png?v=1',
      type: 'Discord Emoji'
    }
  ]
*/

```

**Example 2**
````js
let getEmojis = require("get-emojis-from-string")

let messageContent = "❤️ Discord partner emoji <:PARTNERED_SERVER_OWNER:857501148532965396> Discord verified <:verified:780972928123928597>"

console.log(getEmojis(messageContent, { onlyDefaultEmojis: true }))
/*
  [
    {
      name: '❤',
      id: '❤',
      animated: false,
      image: "https://twemoji.maxcdn.com/v/13.1.0/72x72/2764.png",
      type: 'Default Emoji'
    }
  ]
*/
```