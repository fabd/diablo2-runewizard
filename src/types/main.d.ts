type ERuneTier = import("@/data/runes").ERuneTier;

type TItemTypeId =
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

type TRuneId =
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

type TRuneDef = {
  name: TRuneId;
  tier: ERuneTier;
};

type TRunewordId = string;

type TRuneword = {
  title: TRunewordId;
  runes: TRuneId[];
  level: number;
  ttypes: TItemTypeId[];
  ladder?: boolean;
  tinfos?: string;
};

type TRunewordMeta = {
  [runewordId: string]: string;
};

type TRunewordItem = TRuneword & {
  filterMatch: boolean; // true if this item matches current search filter
};
