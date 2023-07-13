import React from "react";
import { atom, atomFamily } from "recoil";

// 링크 스킬 관리
export const magicianLinkState = atom<number>({
  key: "magicianLink",
  default: 0,
});

export const thiefLinkState = atom<number>({
  key: "thiefLink",
  default: 0,
});

export const kadenaLinkState = atom<number>({
  key: "kadenaLink",
  default: 0,
});

export const illiumLinkState = atom<number>({
  key: "illiumLink",
  default: 0,
});

export const arkLinkState = atom<number>({
  key: "arkLink",
  default: 0,
});

export const kainLinkState = atom<number>({
  key: "kainLink",
  default: 0,
});

export const LinkState = {
  magicianLinkState,
  thiefLinkState,
  kadenaLinkState,
  illiumLinkState,
  arkLinkState,
  kainLinkState,
};
