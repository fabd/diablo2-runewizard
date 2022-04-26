// helper to create a union of possible values in our enums
type Values<T> = T[keyof T];

type ERuneTier = import("@/data/runes").ERuneTier;

type ItemTypeId =
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
  | "Paladin Shields";

type RuneId =
  | "El"
  | "Eld"
  | "Tir"
  | "Nef"
  | "Eth"
  | "Ith"
  | "Tal"
  | "Ral"
  | "Ort"
  | "Thul"
  | "Amn"
  | "Sol"
  | "Shael"
  | "Dol"
  | "Hel"
  | "Io"
  | "Lum"
  | "Ko"
  | "Fal"
  | "Lem"
  | "Pul"
  | "Um"
  | "Mal"
  | "Ist"
  | "Gul"
  | "Vex"
  | "Ohm"
  | "Lo"
  | "Sur"
  | "Ber"
  | "Jah"
  | "Cham"
  | "Zod";

type RuneDef = {
  name: RuneId;
  tier: ERuneTier;
};

type RunewordId = string;

type Runeword = {
  title: RunewordId;
  runes: RuneId[];
  level: number;
  ttypes: ItemTypeId[];
  ladder?: boolean;
  tinfos?: string;
};

type RunewordMeta = {
  [runewordId: string]: string;
};

type RunewordItem = Runeword & {
  filterMatch: boolean; // true if this item matches current search filter
};
