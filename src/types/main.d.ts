/* eslint-disable no-unused-vars */

// helper to create a union of possible values in our enums
type Values<T> = T[keyof T];

type EnumRuneTier = {
  COMMON: 1;
  SEMIRARE: 2;
  RARE: 3;
};

type RuneTier = Values<EnumRuneTier>;

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

type RuneDef = { name: RuneId; tier: RuneTier };

type RunewordId = string;

type Runeword = {
  title: RunewordId;
  runes: RuneId[];
  level: number;
  ttype: string;
  ladder?: boolean;
  tclass?: string;
};

type RunewordMeta = {
  [runewordId: string]: string;
};
