import React from "react";
import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
// 스텟 입력 관리
export const levelState = atom<string>({
  key: "level",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const myClassState = atom<string>({
  key: "myClass",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const hpState = atom<string>({
  key: "hp",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const strState = atom<string>({
  key: "str",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const dexState = atom<string>({
  key: "dex",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const intState = atom<string>({
  key: "int",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const lukState = atom<string>({
  key: "luk",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const noYongsaStatState = atom<string>({
  key: "noYongsaStat",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const simbolStatState = atom<string>({
  key: "simbolStat",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const abilityStatState = atom<string>({
  key: "abilityStat",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const unionStatState = atom<string>({
  key: "unionStat",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const hyperStatState = atom<string>({
  key: "hyperStat",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const StatState = {
  levelState,
  myClassState,
  hpState,
  strState,
  dexState,
  intState,
  lukState,
  noYongsaStatState,
  simbolStatState,
  abilityStatState,
  unionStatState,
  hyperStatState,
};
