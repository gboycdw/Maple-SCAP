import React from "react";
import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
// 도핑 관리
export const noblessBossState = atom<boolean>({
  key: "noblessBoss",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const noblessBossValueState = atom<string>({
  key: "noblessBossValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const noblessDmgState = atom<boolean>({
  key: "noblessDmg",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const noblessDmgValueState = atom<string>({
  key: "noblessDmgValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const noblessCriDmgState = atom<boolean>({
  key: "noblessCriDmg",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const noblessCriDmgValueState = atom<string>({
  key: "noblessCriDmgValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const noblessIgnoreState = atom<boolean>({
  key: "noblessIgnore",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const noblessIgnoreValueState = atom<string>({
  key: "noblessIgnoreValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const herosHawlState = atom<boolean>({
  key: "herosHawl",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingShiningRedState = atom<boolean>({
  key: "dopingShiningRed",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingSuperPowerState = atom<boolean>({
  key: "dopingSuperPower",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingExtremeState = atom<boolean>({
  key: "dopingExtreme",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingGuildBlessingState = atom<boolean>({
  key: "dopingGuildBlessing",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingUnionsPowerState = atom<boolean>({
  key: "dopingUnionsPower",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingUrusState = atom<boolean>({
  key: "dopingUrus",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 2비약 선택
export const dopingBigHeroState = atom<boolean>({
  key: "dopingBigHero",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingLegendHeroState = atom<boolean>({
  key: "dopingLegendHero",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingJangBiState = atom<boolean>({
  key: "dopingJangBi",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 뿌리기 선택
export const dopingFishState = atom<boolean>({
  key: "dopingFish",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingRebootAtkPotionState = atom<boolean>({
  key: "dopingRebootAtkPotion",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingDragonsMealState = atom<boolean>({
  key: "dopingDragonsMeal",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// 스텟 물약
export const dopingStatPotionState = atom<boolean>({
  key: "dopingStatPotion",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dopingStatPotionValueState = atom<string>({
  key: "dopingStatPotionValue",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const DopingState = {
  noblessBossState,
  noblessBossValueState,
  noblessDmgState,
  noblessDmgValueState,
  noblessCriDmgState,
  noblessCriDmgValueState,
  noblessIgnoreState,
  noblessIgnoreValueState,
  herosHawlState,
  dopingShiningRedState,
  dopingSuperPowerState,
  dopingExtremeState,
  dopingGuildBlessingState,
  dopingUnionsPowerState,
  dopingUrusState,
  dopingBigHeroState,
  dopingLegendHeroState,
  dopingJangBiState,
  dopingFishState,
  dopingRebootAtkPotionState,
  dopingDragonsMealState,
  dopingStatPotionState,
  dopingStatPotionValueState,
};
