import React from "react";
import { atom, atomFamily } from "recoil";
// 어빌리티 상태관리

export const firstAbilityState = atom<string>({
  key: "firstAbility",
  default: "",
});

export const firstOptionState = atom<any[]>({
  key: "firstOption",
  default: [],
});

export const firstValueState = atom<string>({
  key: "firstValue",
  default: "",
});

export const secondAbilityState = atom<string>({
  key: "secondAbility",
  default: "",
});

export const secondOptionState = atom<any[]>({
  key: "secondOption",
  default: [],
});

export const secondValueState = atom<string>({
  key: "secondValue",
  default: "",
});

export const thirdAbilityState = atom<string>({
  key: "thirdAbility",
  default: "",
});

export const thirdOptionState = atom<any[]>({
  key: "thirdOption",
  default: [],
});

export const thirdValueState = atom<string>({
  key: "thirdValue",
  default: "",
});

export const AbilityState = {
  firstAbilityState,
  firstOptionState,
  firstValueState,
  secondAbilityState,
  secondOptionState,
  secondValueState,
  thirdAbilityState,
  thirdOptionState,
  thirdValueState,
};
