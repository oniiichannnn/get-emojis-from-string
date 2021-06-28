# What is this?
A package for getting emojis out from your strings, this works with Discord emojis too!

Examples:
```js
let getEmojis = require("get-emojis-from-string")
console.log(getEmojis("hello ❤️"))
// [ { name: '❤', id: '❤', animated: false, type: 'Default Emoji' } ]
```
```js
let getEmojis = require("get-emojis-from-string")
console.log(getEmojis("Discord partner emoji <a:PARTNERED_SERVER_OWNER:857501148532965396> Discord verified <:verified:780972928123928597>"))
/*
[
  { name: 'PARTNERED_SERVER_OWNER', id: '857501148532965396', animated: true, type: 'Discord Emoji'},
  { name: 'verified', id: '780972928123928597', animated: false, type: 'Discord Emoji' }
]
*/
```
```js
let getEmojis = require("get-emojis-from-string")
console.log(getEmojis("❤️ Discord partner emoji <:PARTNERED_SERVER_OWNER:857501148532965396> Discord verified <:verified:780972928123928597>"))
/*
[
    { name: '❤', id: '❤', animated: false, type: 'Default Emoji' },
    { name: 'PARTNERED_SERVER_OWNER', id: '857501148532965396', animated: true, type: 'Discord Emoji'},
    { name: 'verified', id: '780972928123928597', animated: false, type: 'Discord Emoji' }
]
*/
```