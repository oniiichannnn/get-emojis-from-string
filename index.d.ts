/**
Get emojis from a string
@param string - String that contains the emojis.
*/

type Emojis = {
    name: string,
    id: string,
    animated: boolean,
    image: string,
    type: "Discord Emoji" | "Default Emoji"
}

type Options = {
    onlyDiscordEmojis?: boolean,
    onlyDefaultEmojis?: boolean
}

declare function getEmojisFromString(
	string     : string,
    options    : Options = {}
): Emojis[];

export = getEmojisFromString;
