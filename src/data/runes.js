/** @type {EnumRuneTier} */
export const EnumRuneTier = {
  COMMON: 1,
  SEMIRARE: 2,
  RARE: 3,
};

/** @type {{name: RuneId, tier: RuneTier}[]} */
const runes = [
  { name: "El", tier: EnumRuneTier.COMMON },
  { name: "Eld", tier: EnumRuneTier.COMMON },
  { name: "Tir", tier: EnumRuneTier.COMMON },
  { name: "Nef", tier: EnumRuneTier.COMMON },
  { name: "Eth", tier: EnumRuneTier.COMMON },
  { name: "Ith", tier: EnumRuneTier.COMMON },
  { name: "Tal", tier: EnumRuneTier.COMMON },
  { name: "Ral", tier: EnumRuneTier.COMMON },
  { name: "Ort", tier: EnumRuneTier.COMMON },
  { name: "Thul", tier: EnumRuneTier.COMMON },
  { name: "Amn", tier: EnumRuneTier.COMMON },
  { name: "Sol", tier: EnumRuneTier.SEMIRARE },
  { name: "Shael", tier: EnumRuneTier.SEMIRARE },
  { name: "Dol", tier: EnumRuneTier.SEMIRARE },
  { name: "Hel", tier: EnumRuneTier.SEMIRARE },
  { name: "Io", tier: EnumRuneTier.SEMIRARE },
  { name: "Lum", tier: EnumRuneTier.SEMIRARE },
  { name: "Ko", tier: EnumRuneTier.SEMIRARE },
  { name: "Fal", tier: EnumRuneTier.SEMIRARE },
  { name: "Lem", tier: EnumRuneTier.SEMIRARE },
  { name: "Pul", tier: EnumRuneTier.SEMIRARE },
  { name: "Um", tier: EnumRuneTier.SEMIRARE },
  { name: "Mal", tier: EnumRuneTier.RARE },
  { name: "Ist", tier: EnumRuneTier.RARE },
  { name: "Gul", tier: EnumRuneTier.RARE },
  { name: "Vex", tier: EnumRuneTier.RARE },
  { name: "Ohm", tier: EnumRuneTier.RARE },
  { name: "Lo", tier: EnumRuneTier.RARE },
  { name: "Sur", tier: EnumRuneTier.RARE },
  { name: "Ber", tier: EnumRuneTier.RARE },
  { name: "Jah", tier: EnumRuneTier.RARE },
  { name: "Cham", tier: EnumRuneTier.RARE },
  { name: "Zod", tier: EnumRuneTier.RARE },
];

export function runesIds() {
  return runes.map((rune) => rune.name);
}

export default runes;
