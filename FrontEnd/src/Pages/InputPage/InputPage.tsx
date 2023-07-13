import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import CommonInput from "../../Components/InputPage/CommonInput";
import DetailInput from "../../Components/InputPage/DetailInput";
import DopingInput from "../../Components/InputPage/DopingInput";
import { useRecoilState } from "recoil";
import {
  AbilityState,
  SpecialState,
  StatState,
  DetailState,
  LinkState,
  DopingState,
} from "../../Recoil/State";

function InputPage() {
  const navigate = useNavigate();

  // 어빌리티 상태관리
  const [firstAbility, setFirstAbility] = useRecoilState(
    AbilityState.firstAbilityState
  );
  const [firstValue, setFirstValue] = useRecoilState(
    AbilityState.firstValueState
  );
  const [secondAbility, setSecondAbility] = useRecoilState(
    AbilityState.secondAbilityState
  );
  const [secondValue, setSecondValue] = useRecoilState(
    AbilityState.secondValueState
  );
  const [thirdAbility, setThirdAbility] = useRecoilState(
    AbilityState.thirdAbilityState
  );
  const [thirdValue, setThirdValue] = useRecoilState(
    AbilityState.thirdValueState
  );

  // 특수 정보 관리
  const [reboot, setReboot] = useRecoilState(SpecialState.rebootState);
  const [genesis, setGenesis] = useRecoilState(SpecialState.genesisState);
  const [combat, setCombat] = useRecoilState(SpecialState.combatState);
  const [mugongSoul, setMugongSoul] = useRecoilState(
    SpecialState.mugongSoulState
  );
  const [useRuinForceShild, setUseRuinForceShild] = useRecoilState(
    SpecialState.useRuinForceShildState
  );
  const [epiSoul, setEpiSoul] = useRecoilState(SpecialState.epiSoulState);
  const [oneHandSword, setOneHandSword] = useRecoilState(
    SpecialState.oneHandSwordState
  );

  // 스텟 입력 관리
  const [level, setLevel] = useRecoilState(StatState.levelState);
  const [myClass, setMyClass] = useRecoilState(StatState.myClassState);
  const [hp, setHp] = useRecoilState(StatState.hpState);
  const [str, setStr] = useRecoilState(StatState.strState);
  const [dex, setDex] = useRecoilState(StatState.dexState);
  const [int, setInt] = useRecoilState(StatState.intState);
  const [luk, setLuk] = useRecoilState(StatState.lukState);
  const [noYongsaStat, setNoYongsaStat] = useRecoilState(
    StatState.noYongsaStatState
  );
  const [simbolStat, setSimbolStat] = useRecoilState(StatState.simbolStatState);
  const [abilityStat, setAbilityStat] = useRecoilState(
    StatState.abilityStatState
  );
  const [unionStat, setUnionStat] = useRecoilState(StatState.unionStatState);
  const [hyperStat, setHyperStat] = useRecoilState(StatState.hyperStatState);

  // 상세스텟 입력 관리
  const [higherAtk, setHigherAtk] = useRecoilState(DetailState.higherAtkState);
  const [lowerAtk, setLowerAtk] = useRecoilState(DetailState.lowerAtkState);
  const [dmg, setDmg] = useRecoilState(DetailState.dmgState);
  const [bossDmg, setBossDmg] = useRecoilState(DetailState.bossDmgState);
  const [buffDuration, setBuffDuration] = useRecoilState(
    DetailState.buffDurationState
  );
  const [ignoreDef, setIgnoreDef] = useRecoilState(DetailState.ignoreDefState);
  const [criticalDmg, setCriticalDmg] = useRecoilState(
    DetailState.criticalDmgState
  );
  const [critical, setCritical] = useRecoilState(DetailState.criticalState);
  const [weaponAtk, setWeaponAtk] = useRecoilState(DetailState.weaponAtkState);
  const [atkPercent, setAtkPercent] = useRecoilState(
    DetailState.atkPercentState
  );
  const [mercedesUnion, setMercedesUnion] = useRecoilState(
    DetailState.mercedesUnionState
  );
  const [wildhunterUnion, setWildhunterUnion] = useRecoilState(
    DetailState.wildhunterUnionState
  );

  // 링크 스킬 관리
  const [magicianLink, setMagicianLink] = useRecoilState(
    LinkState.magicianLinkState
  );
  const [thiefLink, setThiefLink] = useRecoilState(LinkState.thiefLinkState);
  const [kadenaLink, setKadenaLink] = useRecoilState(LinkState.kadenaLinkState);
  const [illiumLink, setIlliumLink] = useRecoilState(LinkState.illiumLinkState);
  const [arkLink, setArkLink] = useRecoilState(LinkState.arkLinkState);
  const [kainLink, setKainLink] = useRecoilState(LinkState.kainLinkState);

  // 도핑 관리
  const [noblessBoss, setNoblessBoss] = useRecoilState(
    DopingState.noblessBossState
  );
  const [noblessBossValue, setNoblessBossValue] = useRecoilState(
    DopingState.noblessBossValueState
  );
  const [noblessDmg, setNoblessDmg] = useRecoilState(
    DopingState.noblessDmgState
  );
  const [noblessDmgValue, setNoblessDmgValue] = useRecoilState(
    DopingState.noblessDmgValueState
  );
  const [noblessCriDmg, setNoblessCriDmg] = useRecoilState(
    DopingState.noblessCriDmgState
  );
  const [noblessCriDmgValue, setNoblessCriDmgValue] = useRecoilState(
    DopingState.noblessCriDmgValueState
  );
  const [noblessIgnore, setNoblessIgnore] = useRecoilState(
    DopingState.noblessIgnoreState
  );
  const [noblessIgnoreValue, setNoblessIgnoreValue] = useRecoilState(
    DopingState.noblessIgnoreValueState
  );
  const [herosHawl, setHerosHawl] = useRecoilState(DopingState.herosHawlState);
  const [dopingShiningRed, setDopingShiningRed] = useRecoilState(
    DopingState.dopingShiningRedState
  );
  const [dopingSuperPower, setDopingSuperPower] = useRecoilState(
    DopingState.dopingSuperPowerState
  );
  const [dopingExtreme, setDopingExtreme] = useRecoilState(
    DopingState.dopingExtremeState
  );
  const [dopingGuildBlessing, setDopingGuildBlessing] = useRecoilState(
    DopingState.dopingGuildBlessingState
  );
  const [dopingUnionsPower, setDopingUnionsPower] = useRecoilState(
    DopingState.dopingUnionsPowerState
  );
  const [dopingUrus, setDopingUrus] = useRecoilState(
    DopingState.dopingUrusState
  );

  // 2비약 선택
  const [dopingBigHero, setDopingBigHero] = useRecoilState(
    DopingState.dopingBigHeroState
  );
  const [dopingLegendHero, setDopingLegendHero] = useRecoilState(
    DopingState.dopingLegendHeroState
  );
  const [dopingJangBi, setDopingJangBi] = useRecoilState(
    DopingState.dopingJangBiState
  );

  // 뿌리기 선택
  const [dopingFish, setDopingFish] = useRecoilState(
    DopingState.dopingFishState
  );
  const [dopingRebootAtkPotion, setDopingRebootAtkPotion] = useRecoilState(
    DopingState.dopingRebootAtkPotionState
  );
  const [dopingDragonsMeal, setDopingDragonsMeal] = useRecoilState(
    DopingState.dopingDragonsMealState
  );

  // 스텟 물약
  const [dopingStatPotion, setDopingStatPotion] = useRecoilState(
    DopingState.dopingStatPotionState
  );
  const [dopingStatPotionValue, setDopingStatPotionValue] = useRecoilState(
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
      },
      // 어빌리티
      ability: {
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

  // 데이터 초기화 함수
  function resetData() {
    setFirstAbility("");
    setFirstValue("");
    setSecondAbility("");
    setSecondValue("");
    setThirdAbility("");
    setThirdValue("");
    setReboot(false);
    setGenesis(false);
    setCombat(true);
    setMugongSoul("");
    setUseRuinForceShild(false);
    setEpiSoul("");
    setOneHandSword(false);
    setLevel("");
    setMyClass("");
    setHp("");
    setStr("");
    setDex("");
    setInt("");
    setLuk("");
    setNoYongsaStat("");
    setSimbolStat("");
    setAbilityStat("");
    setUnionStat("");
    setHyperStat("");
    setHigherAtk("");
    setLowerAtk("");
    setDmg("");
    setBossDmg("");
    setBuffDuration("");
    setIgnoreDef("");
    setCriticalDmg("");
    setCritical("");
    setWeaponAtk("");
    setAtkPercent("");
    setMercedesUnion("");
    setWildhunterUnion("");
    setMagicianLink("");
    setThiefLink("");
    setKadenaLink("");
    setIlliumLink("");
    setArkLink("");
    setKainLink("");
    setNoblessBoss(false);
    setNoblessBossValue("");
    setNoblessDmg(false);
    setNoblessDmgValue("");
    setNoblessCriDmg(false);
    setNoblessCriDmgValue("");
    setNoblessIgnore(false);
    setNoblessIgnoreValue("");
    setHerosHawl(false);
    setDopingShiningRed(false);
    setDopingSuperPower(false);
    setDopingExtreme(false);
    setDopingGuildBlessing(false);
    setDopingUnionsPower(false);
    setDopingUrus(false);
    setDopingBigHero(false);
    setDopingLegendHero(false);
    setDopingJangBi(false);
    setDopingFish(false);
    setDopingRebootAtkPotion(false);
    setDopingDragonsMeal(false);
    setDopingStatPotion(false);
    setDopingStatPotionValue("");
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
          <DetailInput />
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
            onClick={() => {
              resetData();
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
