/**
Get emojis from a string
@param string - String that contains the emojis.
*/

type ArrayOfEmojis = {
    name: String,
    id: String,
    type: "Discord Emoji" | "Default Emoji"
}


declare function getEmojisFromString(
	string: string,
): ArrayOfEmojis[];

export = getEmojisFromString;