import React from "react";
import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 어빌리티 상태관리
export const firstAbilityState = atom<string>({
  key: "firstAbility",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const firstOptionState = atom<string[]>({
  key: "firstOption",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const firstValueState = atom<string>({
  key: "firstValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const secondAbilityState = atom<string>({
  key: "secondAbility",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const secondOptionState = atom<string[]>({
  key: "secondOption",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const secondValueState = atom<string>({
  key: "secondValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const thirdAbilityState = atom<string>({
  key: "thirdAbility",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const thirdOptionState = atom<string[]>({
  key: "thirdOption",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const thirdValueState = atom<string>({
  key: "thirdValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
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
