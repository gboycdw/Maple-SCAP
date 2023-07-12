import React from "react";
import { atom, atomFamily } from "recoil";
// 스텟 입력 관리
export const levelState = atom<number>({
  key: "level",
  default: 0,
});

export const myClassState = atom<string>({
  key: "myClass",
  default: "",
});

export const hpState = atom<number>({
  key: "hp",
  default: 0,
});

export const strState = atom<number>({
  key: "str",
  default: 0,
});

export const dexState = atom<number>({
  key: "dex",
  default: 0,
});

export const intState = atom<number>({
  key: "int",
  default: 0,
});

export const lukState = atom<number>({
  key: "luk",
  default: 0,
});

export const noYongsaStatState = atom<number>({
  key: "noYongsaStat",
  default: 0,
});

export const simbolStatState = atom<number>({
  key: "simbolStat",
  default: 0,
});

export const abilityStatState = atom<number>({
  key: "abilityStat",
  default: 0,
});

export const unionStatState = atom<number>({
  key: "unionStat",
  default: 0,
});

export const hyperStatState = atom<number>({
  key: "hyperStat",
  default: 0,
});

export const statInputStateObject = {
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
