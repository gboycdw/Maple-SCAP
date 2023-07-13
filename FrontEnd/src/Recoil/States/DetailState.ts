import React from "react";
import { atom, atomFamily } from "recoil";
// 상세스텟 입력 관리
export const higherAtkState = atom<number>({
  key: "higherAtk",
  default: 0,
});

export const lowerAtkState = atom<number>({
  key: "lowerAtk",
  default: 0,
});

export const dmgState = atom<number>({
  key: "dmg",
  default: 0,
});

export const bossDmgState = atom<number>({
  key: "bossDmg",
  default: 0,
});

export const buffDurationState = atom<number>({
  key: "buffDuration",
  default: 0,
});

export const ignoreDefState = atom<number>({
  key: "ignoreDef",
  default: 0,
});

export const criticalDmgState = atom<number>({
  key: "criticalDmg",
  default: 0,
});

export const criticalState = atom<number>({
  key: "critical",
  default: 0,
});

export const weaponAtkState = atom<number>({
  key: "weaponAtk",
  default: 0,
});

export const atkPercentState = atom<number>({
  key: "atkPercent",
  default: 0,
});

export const mercedesUnionState = atom<number>({
  key: "mercedesUnion",
  default: 0,
});

export const wildhunterUnionState = atom<number>({
  key: "wildhunterUnion",
  default: 0,
});

export const DetailState = {
  higherAtkState,
  lowerAtkState,
  dmgState,
  bossDmgState,
  buffDurationState,
  ignoreDefState,
  criticalDmgState,
  criticalState,
  weaponAtkState,
  atkPercentState,
  mercedesUnionState,
  wildhunterUnionState,
};
