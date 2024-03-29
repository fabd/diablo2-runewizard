export const enum ERuneTier {
  COMMON = 1,
  SEMIRARE = 2,
  RARE = 3,
};

const runes: TRuneDef[] = [
  { name: "El", tier: 1 },
  { name: "Eld", tier: 1 },
  { name: "Tir", tier: 1 },
  { name: "Nef", tier: 1 },
  { name: "Eth", tier: 1 },
  { name: "Ith", tier: 1 },
  { name: "Tal", tier: 1 },
  { name: "Ral", tier: 1 },
  { name: "Ort", tier: 1 },
  { name: "Thul", tier: 1 },
  { name: "Amn", tier: 1 },
  { name: "Sol", tier: 2 },
  { name: "Shael", tier: 2 },
  { name: "Dol", tier: 2 },
  { name: "Hel", tier: 2 },
  { name: "Io", tier: 2 },
  { name: "Lum", tier: 2 },
  { name: "Ko", tier: 2 },
  { name: "Fal", tier: 2 },
  { name: "Lem", tier: 2 },
  { name: "Pul", tier: 2 },
  { name: "Um", tier: 2 },
  { name: "Mal", tier: 3 },
  { name: "Ist", tier: 3 },
  { name: "Gul", tier: 3 },
  { name: "Vex", tier: 3 },
  { name: "Ohm", tier: 3 },
  { name: "Lo", tier: 3 },
  { name: "Sur", tier: 3 },
  { name: "Ber", tier: 3 },
  { name: "Jah", tier: 3 },
  { name: "Cham", tier: 3 },
  { name: "Zod", tier: 3 },
];

export function runesIds() {
  return runes.map((rune) => rune.name);
}

export default runes;
