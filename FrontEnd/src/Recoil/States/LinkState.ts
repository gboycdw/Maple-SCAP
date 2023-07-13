import React from "react";
import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// 링크 스킬 관리
export const magicianLinkState = atom<string>({
  key: "magicianLink",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const thiefLinkState = atom<string>({
  key: "thiefLink",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const kadenaLinkState = atom<string>({
  key: "kadenaLink",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const illiumLinkState = atom<string>({
  key: "illiumLink",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const arkLinkState = atom<string>({
  key: "arkLink",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const kainLinkState = atom<string>({
  key: "kainLink",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const LinkState = {
  magicianLinkState,
  thiefLinkState,
  kadenaLinkState,
  illiumLinkState,
  arkLinkState,
  kainLinkState,
};
