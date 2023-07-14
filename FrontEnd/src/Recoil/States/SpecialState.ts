import React from "react";
import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
// 특수 정보 관리
export const rebootState = atom<boolean>({
  key: "reboot",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const genesisState = atom<boolean>({
  key: "genesis",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const combatState = atom<boolean>({
  key: "combat",
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const mugongSoulState = atom<string>({
  key: "mugongSoul",
  default: "0",
  effects_UNSTABLE: [persistAtom],
});

export const useRuinForceShildState = atom<boolean>({
  key: "useRuinForceShild",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const epiSoulState = atom<string>({
  key: "epiSoul",
  default: "0",
  effects_UNSTABLE: [persistAtom],
});

export const oneHandSwordState = atom<boolean>({
  key: "oneHandSword",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const SpecialState = {
  rebootState,
  genesisState,
  combatState,
  mugongSoulState,
  useRuinForceShildState,
  epiSoulState,
  oneHandSwordState,
};
