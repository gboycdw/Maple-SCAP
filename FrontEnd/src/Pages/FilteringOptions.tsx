import React from "react";

const FilteringOptions = {
  options: {
    first: [
      { value: "option0", label: "1줄" },
      { value: "option1", label: "스킬 사용 시 재사용 대기시간 미적용" },
      { value: "option2", label: "다수 공격스킬의 공격대상 1 증가" },
      { value: "option3", label: "패시브 스킬레벨 1 증가" },
      { value: "option4", label: "그 외의 옵션일 경우 선택" },
    ],
    second: [
      { value: "option0", label: "2줄" },
      { value: "option1", label: "스킬 사용 시 재사용 대기시간 미적용" },
      { value: "option2", label: "상태 이상인 대상 공격 시 추가 데미지" },
      { value: "option3", label: "그 외의 옵션일 경우 선택" },
    ],
    third: [
      { value: "option0", label: "3줄" },
      { value: "option1", label: "스킬 사용 시 재사용 대기시간 미적용" },
      { value: "option2", label: "상태 이상인 대상 공격 시 추가 데미지" },
      { value: "option3", label: "그 외의 옵션일 경우 선택" },
    ],
  },
  numbers: {
    reset_Legendary: [
      { value: "option1", label: 15 },
      { value: "option2", label: 16 },
      { value: "option3", label: 17 },
      { value: "option4", label: 18 },
      { value: "option5", label: 19 },
      { value: "option6", label: 20 },
    ],
    reset_Unique: [
      { value: "option1", label: 5 },
      { value: "option2", label: 6 },
      { value: "option3", label: 7 },
      { value: "option4", label: 8 },
      { value: "option5", label: 9 },
      { value: "option6", label: 10 },
    ],
    debuffBonusDamage: [
      { value: "option1", label: 4 },
      { value: "option2", label: 5 },
      { value: "option3", label: 6 },
      { value: "option4", label: 7 },
      { value: "option5", label: 8 },
    ],
    // buffMaintain_Legendary: [
    //   { value: "option1", label: 44 },
    //   { value: "option2", label: 45 },
    //   { value: "option3", label: 46 },
    //   { value: "option4", label: 47 },
    //   { value: "option5", label: 48 },
    //   { value: "option6", label: 49 },
    //   { value: "option6", label: 50 },
    // ],
    // buffMaintain_Unique: [
    //   { value: "option1", label: 19 },
    //   { value: "option2", label: 20 },
    //   { value: "option3", label: 21 },
    //   { value: "option4", label: 22 },
    //   { value: "option5", label: 23 },
    //   { value: "option6", label: 24 },
    //   { value: "option7", label: 25 },
    //   { value: "option8", label: 32 },
    //   { value: "option9", label: 33 },
    //   { value: "option10", label: 34 },
    //   { value: "option11", label: 35 },
    //   { value: "option12", label: 36 },
    //   { value: "option13", label: 37 },
    //   { value: "option14", label: 38 },
    // ],
  },
};

export default FilteringOptions;
