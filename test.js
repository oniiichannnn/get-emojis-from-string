const emojis = require("./index.js")

console.log(emojis("❤",{ onlyDefaultEmojis: true }))

let messageContent = "❤️ Discord partner emoji <:PARTNERED_SERVER_OWNER:857501148532965396> Discord verified <:verified:780972928123928597>"

console.log(emojis(messageContent, { onlyDiscordEmojis: true }))