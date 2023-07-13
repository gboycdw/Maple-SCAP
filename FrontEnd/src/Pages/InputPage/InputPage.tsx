import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CommonInput from "../../Components/InputPage/CommonInput";
import DetailInput from "../../Components/InputPage/DetailInput";
import DopingInput from "../../Components/InputPage/DopingInput";
import { AbilityState } from "../../Recoil/States/AbilityState";
import { SpecialState } from "../../Recoil/States/SpecialState";
import { StatState } from "../../Recoil/States/StatState";
import { DetailState } from "../../Recoil/States/DetailState";
import { LinkState } from "../../Recoil/States/LinkState";
import { DopingState } from "../../Recoil/States/DopingState";
import { useRecoilState } from "recoil";

function InputPage() {
  const navigate = useNavigate();

  // 어빌리티 상태관리
  const [firstAbility] = useRecoilState(AbilityState.firstAbilityState);
  const [firstValue] = useRecoilState(AbilityState.firstValueState);
  const [secondAbility] = useRecoilState(AbilityState.secondAbilityState);
  const [secondValue] = useRecoilState(AbilityState.secondValueState);
  const [thirdAbility] = useRecoilState(AbilityState.thirdAbilityState);
  const [thirdValue] = useRecoilState(AbilityState.thirdValueState);

  // 특수 정보 관리
  const [reboot] = useRecoilState(SpecialState.rebootState);
  const [genesis] = useRecoilState(SpecialState.genesisState);
  const [combat] = useRecoilState(SpecialState.combatState);
  const [mugongSoul] = useRecoilState(SpecialState.mugongSoulState);
  const [useRuinForceShild] = useRecoilState(
    SpecialState.useRuinForceShildState
  );
  const [epiSoul] = useRecoilState(SpecialState.epiSoulState);
  const [oneHandSword] = useRecoilState(SpecialState.oneHandSwordState);

  // 스텟 입력 관리
  const [level] = useRecoilState(StatState.levelState);
  const [myClass] = useRecoilState(StatState.myClassState);
  const [hp] = useRecoilState(StatState.hpState);
  const [str] = useRecoilState(StatState.strState);
  const [dex] = useRecoilState(StatState.dexState);
  const [int] = useRecoilState(StatState.intState);
  const [luk] = useRecoilState(StatState.lukState);
  const [noYongsaStat] = useRecoilState(StatState.noYongsaStatState);
  const [simbolStat] = useRecoilState(StatState.simbolStatState);
  const [abilityStat] = useRecoilState(StatState.abilityStatState);
  const [unionStat] = useRecoilState(StatState.unionStatState);
  const [hyperStat] = useRecoilState(StatState.hyperStatState);

  // 상세스텟 입력 관리
  const [higherAtk] = useRecoilState(DetailState.higherAtkState);
  const [lowerAtk] = useRecoilState(DetailState.lowerAtkState);
  const [dmg] = useRecoilState(DetailState.dmgState);
  const [bossDmg] = useRecoilState(DetailState.bossDmgState);
  const [buffDuration] = useRecoilState(DetailState.buffDurationState);
  const [ignoreDef] = useRecoilState(DetailState.ignoreDefState);
  const [criticalDmg] = useRecoilState(DetailState.criticalDmgState);
  const [critical] = useRecoilState(DetailState.criticalState);
  const [weaponAtk] = useRecoilState(DetailState.weaponAtkState);
  const [atkPercent] = useRecoilState(DetailState.atkPercentState);
  const [mercedesUnion] = useRecoilState(DetailState.mercedesUnionState);
  const [wildhunterUnion] = useRecoilState(DetailState.wildhunterUnionState);

  // 링크 스킬 관리
  const [magicianLink] = useRecoilState(LinkState.magicianLinkState);
  const [thiefLink] = useRecoilState(LinkState.thiefLinkState);
  const [kadenaLink] = useRecoilState(LinkState.kadenaLinkState);
  const [illiumLink] = useRecoilState(LinkState.illiumLinkState);
  const [arkLink] = useRecoilState(LinkState.arkLinkState);
  const [kainLink] = useRecoilState(LinkState.kainLinkState);

  // 도핑 관리
  const [noblessBoss] = useRecoilState(DopingState.noblessBossState);
  const [noblessBossValue] = useRecoilState(DopingState.noblessBossValueState);
  const [noblessDmg] = useRecoilState(DopingState.noblessDmgState);
  const [noblessDmgValue] = useRecoilState(DopingState.noblessDmgValueState);
  const [noblessCriDmg] = useRecoilState(DopingState.noblessCriDmgState);
  const [noblessCriDmgValue] = useRecoilState(
    DopingState.noblessCriDmgValueState
  );
  const [noblessIgnore] = useRecoilState(DopingState.noblessIgnoreState);
  const [noblessIgnoreValue] = useRecoilState(
    DopingState.noblessIgnoreValueState
  );
  const [herosHawl] = useRecoilState(DopingState.herosHawlState);
  const [dopingShiningRed] = useRecoilState(DopingState.dopingShiningRedState);
  const [dopingSuperPower] = useRecoilState(DopingState.dopingSuperPowerState);
  const [dopingExtreme] = useRecoilState(DopingState.dopingExtremeState);
  const [dopingGuildBlessing] = useRecoilState(
    DopingState.dopingGuildBlessingState
  );
  const [dopingUnionsPower] = useRecoilState(
    DopingState.dopingUnionsPowerState
  );
  const [dopingUrus] = useRecoilState(DopingState.dopingUrusState);

  // 2비약 선택
  const [dopingBigHero] = useRecoilState(DopingState.dopingBigHeroState);
  const [dopingLegendHero] = useRecoilState(DopingState.dopingLegendHeroState);
  const [dopingJangBi] = useRecoilState(DopingState.dopingJangBiState);

  // 뿌리기 선택
  const [dopingFish] = useRecoilState(DopingState.dopingFishState);
  const [dopingRebootAtkPotion] = useRecoilState(
    DopingState.dopingRebootAtkPotionState
  );
  const [dopingDragonsMeal] = useRecoilState(
    DopingState.dopingDragonsMealState
  );

  // 스텟 물약
  const [dopingStatPotion] = useRecoilState(DopingState.dopingStatPotionState);
  const [dopingStatPotionValue] = useRecoilState(
    DopingState.dopingStatPotionValueState
  );

  // 데이터를 제출하기 위해 정리하는 함수
  function submitData() {
    const data = {
      // 특수 옵션
      special: {
        reboot: reboot,
        genesis: genesis,
        combat: combat,
        mugongSoul: mugongSoul,
        useRuinForceShild: useRuinForceShild,
        epiSoul: epiSoul,
        oneHandSword: oneHandSword,
      },
      stat: {
        // 기본 스텟
        level: level,
        myClass: myClass,
        hp: hp,
        str: str,
        dex: dex,
        int: int,
        luk: luk,
        noYongsaStat: noYongsaStat,
        simbolStat: simbolStat,
        abilityStat: abilityStat,
        unionStat: unionStat,
        hyperStat: hyperStat,
        // 세부 스텟
        higherAtk: higherAtk,
        lowerAtk: lowerAtk,
        dmg: dmg,
        bossDmg: bossDmg,
        buffDuration: buffDuration,
        ignoreDef: ignoreDef,
        criticalDmg: criticalDmg,
        critical: critical,
        weaponAtk: weaponAtk,
        atkPercent: atkPercent,
        mercedesUnion: mercedesUnion,
        wildhunterUnion: wildhunterUnion,
        // 어빌리티
        firstAbility: [firstAbility, firstValue],
        secondAbility: [secondAbility, secondValue],
        thirdAbility: [thirdAbility, thirdValue],
      },
      // 링크 스킬
      linkSkill: {
        magicianLink: magicianLink,
        thiefLink: thiefLink,
        kadenaLink: kadenaLink,
        illiumLink: illiumLink,
        arkLink: arkLink,
        kainLink: kainLink,
      },
      // 도핑
      doping: {
        nobless: [
          noblessBoss ? noblessBossValue : 0,
          noblessDmg ? noblessDmgValue : 0,
          noblessCriDmg ? noblessCriDmgValue : 0,
          noblessIgnore ? noblessIgnoreValue : 0,
        ],
        herosHawl: herosHawl,
        dopingShiningRed: dopingShiningRed,
        dopingBigHero: dopingBigHero,
        dopingLegendHero: dopingLegendHero,
        dopingJangBi: dopingJangBi,
        dopingSuperPower: dopingSuperPower,
        dopingExtreme: dopingExtreme,
        dopingGuildBlessing: dopingGuildBlessing,
        dopingUnionsPower: dopingUnionsPower,
        dopingUrus: dopingUrus,
        dopingFish: dopingFish,
        dopingRebootAtkPotion: dopingRebootAtkPotion,
        dopingDragonsMeal: dopingDragonsMeal,
        dopingStatPotion: dopingStatPotion ? dopingStatPotionValue : 0,
      },
    };
    console.log(data);
    return data;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StyledContainer>
        <StyledDiv>
          <CommonInput />
          {/* 여기서부터 중앙 페이지 */}
          <DetailInput />
          {/* 여기서부터 우측 페이지 */}
          <DopingInput />
        </StyledDiv>
        <div>
          <EndButton
            onClick={() => {
              submitData();
              navigate("/result");
            }}
          >
            제출하기
          </EndButton>
          <EndButton
            onClick={(e) => {
              window.location.reload();
            }}
          >
            초기화
          </EndButton>
          <ReturnLink to="/"> ◀️ 돌아가기</ReturnLink>
        </div>
      </StyledContainer>
    </div>
  );
}

export default InputPage;

// 돌아가기 버튼
const ReturnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// 상세스텟창 전체 컨테이너
const StyledContainer = styled.div`
  display: flex;
  /* position: absolute; */
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  justify-content: center;
  width: 100%;
  font-size: 1.7rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 1rem;

  @media (max-width: 1100px) {
    display: grid;
    place-items: center;
  }
`;

const EndButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  width: 100px;
  height: 50px;
`;
