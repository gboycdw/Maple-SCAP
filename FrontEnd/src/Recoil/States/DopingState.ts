import React from "react";
import { atom, atomFamily } from "recoil";
// 도핑 관리
export const noblessBossState = atom<boolean>({
  key: "noblessBoss",
  default: false,
});

export const noblessBossValueState = atom<number>({
  key: "noblessBossValue",
  default: 0,
});

export const noblessDmgState = atom<boolean>({
  key: "noblessDmg",
  default: false,
});

export const noblessDmgValueState = atom<number>({
  key: "noblessDmgValue",
  default: 0,
});

export const noblessCriDmgState = atom<boolean>({
  key: "noblessCriDmg",
  default: false,
});

export const noblessCriDmgValueState = atom<number>({
  key: "noblessCriDmgValue",
  default: 0,
});

export const noblessIgnoreState = atom<boolean>({
  key: "noblessIgnore",
  default: false,
});

export const noblessIgnoreValueState = atom<number>({
  key: "noblessIgnoreValue",
  default: 0,
});

export const herosHawlState = atom<boolean>({
  key: "herosHawl",
  default: false,
});

export const dopingShiningRedState = atom<boolean>({
  key: "dopingShiningRed",
  default: false,
});

export const dopingSuperPowerState = atom<boolean>({
  key: "dopingSuperPower",
  default: false,
});

export const dopingExtremeState = atom<boolean>({
  key: "dopingExtreme",
  default: false,
});

export const dopingGuildBlessingState = atom<boolean>({
  key: "dopingGuildBlessing",
  default: false,
});

export const dopingUnionsPowerState = atom<boolean>({
  key: "dopingUnionsPower",
  default: false,
});

export const dopingUrusState = atom<boolean>({
  key: "dopingUrus",
  default: false,
});

// 2비약 선택
export const dopingBigHeroState = atom<boolean>({
  key: "dopingBigHero",
  default: false,
});

export const dopingLegendHeroState = atom<boolean>({
  key: "dopingLegendHero",
  default: false,
});

export const dopingJangBiState = atom<boolean>({
  key: "dopingJangBi",
  default: false,
});

// 뿌리기 선택
export const dopingFishState = atom<boolean>({
  key: "dopingFish",
  default: false,
});

export const dopingRebootAtkPotionState = atom<boolean>({
  key: "dopingRebootAtkPotion",
  default: false,
});

export const dopingDragonsMealState = atom<boolean>({
  key: "dopingDragonsMeal",
  default: false,
});

// 스텟 물약
export const dopingStatPotionState = atom<boolean>({
  key: "dopingStatPotion",
  default: false,
});

export const dopingStatPotionValueState = atom<number>({
  key: "dopingStatPotionValue",
  default: 0,
});

export const dopingStateObject = {
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
