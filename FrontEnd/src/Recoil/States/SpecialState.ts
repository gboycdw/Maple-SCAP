import React from "react";
import { atom, atomFamily } from "recoil";
// 특수 정보 관리
export const rebootState = atom<boolean>({
  key: "reboot",
  default: false,
});

export const genesisState = atom<boolean>({
  key: "genesis",
  default: false,
});

export const combatState = atom<boolean>({
  key: "combat",
  default: true,
});

export const mugongSoulState = atom<number>({
  key: "mugongSoul",
  default: 0,
});

export const useRuinForceShildState = atom<boolean>({
  key: "useRuinForceShild",
  default: false,
});

export const epiSoulState = atom<number>({
  key: "epiSoul",
  default: 0,
});

export const oneHandSwordState = atom<boolean>({
  key: "oneHandSword",
  default: false,
});

export const specialInfoStateObject = {
  rebootState,
  genesisState,
  combatState,
  mugongSoulState,
  useRuinForceShildState,
  epiSoulState,
  oneHandSwordState,
};
