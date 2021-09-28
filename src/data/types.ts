
type TypeId = 
| "Helms"
| "Swords"
| "Axes"
| "Maces"
| "Melee Weapons"
| "Body Armors"
| "Staves"
| "Shields"
| "Scepters"
| "Missile Weapons"
| "Polearms"
| "Clubs"
| "Hammers"
| "Wands"
| "Weapons"
| "Claws"
| "Paladin Shields"
;

const types: {[key in TypeId]: {url?: string}} = {
	"Helms": { url: "https://diablo2.diablowiki.net/Helms" },
	"Swords": { url: "https://diablo2.diablowiki.net/Swords" },
	"Axes": { url: "https://diablo2.diablowiki.net/Axes" },
	"Maces": { url: "https://diablo2.diablowiki.net/Maces" },
	"Melee Weapons": {},
	"Body Armors": { url: "https://diablo2.diablowiki.net/Body_Armor" },
	"Staves": { url: "https://diablo2.diablowiki.net/Staves" },
	"Shields": { url: "https://diablo2.diablowiki.net/Shields" },
	"Scepters": { url: "https://diablo2.diablowiki.net/Scepters" },
	"Missile Weapons": {},
	"Polearms": { url: "https://diablo2.diablowiki.net/Polearms" },
	"Clubs": { url: "https://diablo2.diablowiki.net/Clubs" },
	"Hammers": { url: "https://diablo2.diablowiki.net/Hammers" },
	"Wands": { url: "https://diablo2.diablowiki.net/Wands" },
	"Weapons": {},
	"Claws": { url: "https://diablo2.diablowiki.net/Assassin_Items" },
	"Paladin Shields": { url: "https://diablo2.diablowiki.net/Paladin_Items" },
};

export default types;
