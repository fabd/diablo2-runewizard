export type RuneId =
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

export type RuneDef = {
  name: RuneId;
  tier: RuneTier;
};

export enum RuneTier {
  COMMON = 1,
  SEMIRARE,
  RARE,
}

export type RunewordId = string;

export type Runeword = {
  title: RunewordId;
  runes: RuneId[];
  level: number;
  ttype: string;
  ladder?: boolean;
  tclass?: string;
};

export type RunewordMeta = {
  [runewordId: string]: string;
};
