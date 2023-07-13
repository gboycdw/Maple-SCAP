import React from "react";
import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
// 상세스텟 입력 관리
export const higherAtkState = atom<string>({
  key: "higherAtk",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const lowerAtkState = atom<string>({
  key: "lowerAtk",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const dmgState = atom<string>({
  key: "dmg",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const bossDmgState = atom<string>({
  key: "bossDmg",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const buffDurationState = atom<string>({
  key: "buffDuration",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const ignoreDefState = atom<string>({
  key: "ignoreDef",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const criticalDmgState = atom<string>({
  key: "criticalDmg",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const criticalState = atom<string>({
  key: "critical",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const weaponAtkState = atom<string>({
  key: "weaponAtk",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const atkPercentState = atom<string>({
  key: "atkPercent",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const mercedesUnionState = atom<string>({
  key: "mercedesUnion",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const wildhunterUnionState = atom<string>({
  key: "wildhunterUnion",
  default: "",
  effects_UNSTABLE: [persistAtom],
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
