export type RuneName =
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

export type Rune = {
  label: RuneName;
  tier: RuneTier;
};

export enum RuneTier {
  COMMON = 1,
  SEMIRARE,
  RARE,
}

export type Runeword = {
  title: string;
  runes: RuneName[];
  level: number;
  ttype: string;
  ladder?: boolean;
  tclass?: string;
};
