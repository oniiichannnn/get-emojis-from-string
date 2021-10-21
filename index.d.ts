/**
Get emojis from a string
@param string - String that contains the emojis.
*/

type Emojis = {
    name: String,
    id: String,
    animated: Boolean,
    image: String,
    type: "Discord Emoji" | "Default Emoji"
}

type Options = {
    onlyDiscordEmojis?: Boolean,
    onlyDefaultEmojis?: Boolean
}

declare function getEmojisFromString(
	string     : string,
    options    : Options = {}
): Emojis[];

export = getEmojisFromString;