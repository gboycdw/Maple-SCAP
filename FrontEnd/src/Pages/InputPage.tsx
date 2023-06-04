import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CommonInput from "../Components/InputPage/CommonInput";
import DetailInput from "../Components/InputPage/DetailInput";
import DopingInput from "../Components/InputPage/DopingInput";

function InputPage() {
  // 어빌리티 상태관리
  const [firstAbility, setFirstAbility] = React.useState<string>("");
  const [firstOption, setFirstOption] = React.useState<any>([]);
  const [firstValue, setFirstValue] = React.useState<string>("");
  const [secondAbility, setSecondAbility] = React.useState<string>("");
  const [secondOption, setSecondOption] = React.useState<any>([]);
  const [secondValue, setSecondValue] = React.useState<string>("");
  const [thirdAbility, setThirdAbility] = React.useState<string>("");
  const [thirdOption, setThirdOption] = React.useState<any>([]);
  const [thirdValue, setThirdValue] = React.useState<string>("");

  // 특수 정보 관리
  const [reboot, setReboot] = React.useState(false);
  const [genesis, setGenesis] = React.useState(false);
  const [combat, setCombat] = React.useState(true);
  const [mugongSoul, setMugongSoul] = React.useState(0);
  const [useRuinForceShild, setUseRuinForceShild] = React.useState(false);
  const [epiSoul, setEpiSoul] = React.useState(0);
  const [oneHandSword, setOneHandSword] = React.useState(false);

  // 스텟 입력 관리
  const [level, setLevel] = React.useState(0);
  const [myClass, setMyClass] = React.useState("");
  const [hp, setHp] = React.useState(0);
  const [str, setStr] = React.useState(0);
  const [dex, setDex] = React.useState(0);
  const [int, setInt] = React.useState(0);
  const [luk, setLuk] = React.useState(0);
  const [noYongsaStat, setNoYongsaStat] = React.useState(0);
  const [simbolStat, setSimbolStat] = React.useState(0);
  const [abilityStat, setAbilityStat] = React.useState(0);
  const [unionStat, setUnionStat] = React.useState(0);
  const [hyperStat, setHyperStat] = React.useState(0);

  // 상세스텟 입력 관리
  const [higherAtk, setHigherAtk] = React.useState(0);
  const [lowerAtk, setLowerAtk] = React.useState(0);
  const [dmg, setDmg] = React.useState(0);
  const [bossDmg, setBossDmg] = React.useState(0);
  const [buffDuration, setBuffDuration] = React.useState(0);
  const [ignoreDef, setIgnoreDef] = React.useState(0);
  const [criticalDmg, setCriticalDmg] = React.useState(0);
  const [critical, setCritical] = React.useState(0);
  const [weaponAtk, setWeaponAtk] = React.useState(0);
  const [atkPercent, setAtkPercent] = React.useState(0);
  const [mercedesUnion, setMercedesUnion] = React.useState(0);
  const [wildhunterUnion, setWildhunterUnion] = React.useState(0);

  // 링크 스킬 관리
  const [magicianLink, setMagicianLink] = React.useState(0);
  const [thiefLink, setThiefLink] = React.useState(0);
  const [kadenaLink, setKadenaLink] = React.useState(0);
  const [illiumLink, setIlliumLink] = React.useState(0);
  const [arkLink, setArkLink] = React.useState(0);
  const [kainLink, setKainLink] = React.useState(0);

  // 도핑 관리
  const [noblessBoss, setNoblessBoss] = React.useState(false);
  const [noblessBossValue, setNoblessBossValue] = React.useState(0);
  const [noblessDmg, setNoblessDmg] = React.useState(false);
  const [noblessDmgValue, setNoblessDmgValue] = React.useState(0);
  const [noblessCriDmg, setNoblessCriDmg] = React.useState(false);
  const [noblessCriDmgValue, setNoblessCriDmgValue] = React.useState(0);
  const [noblessIgnore, setNoblessIgnore] = React.useState(false);
  const [noblessIgnoreValue, setNoblessIgnoreValue] = React.useState(0);
  const [herosHawl, setHerosHawl] = React.useState(false);
  const [dopingShiningRed, setDopingShiningRed] = React.useState(false);
  const [dopingSuperPower, setDopingSuperPower] = React.useState(false);
  const [dopingExtreme, setDopingExtreme] = React.useState(false);
  const [dopingGuildBlessing, setDopingGuildBlessing] = React.useState(false);
  const [dopingUnionsPower, setDopingUnionsPower] = React.useState(false);
  const [dopingUrus, setDopingUrus] = React.useState(false);

  // 2비약 선택
  const [dopingBigHero, setDopingBigHero] = React.useState(false);
  const [dopingLegendHero, setDopingLegendHero] = React.useState(false);
  const [dopingJangBi, setDopingJangBi] = React.useState(false);

  // 뿌리기 선택
  const [dopingFish, setDopingFish] = React.useState(false);
  const [dopingRebootAtkPotion, setDopingRebootAtkPotion] =
    React.useState(false);
  const [dopingDragonsMeal, setDopingDragonsMeal] = React.useState(false);

  const [dopingStatPotion, setDopingStatPotion] = React.useState(false);
  const [dopingStatPotionValue, setDopingStatPotionValue] = React.useState(0);

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
          <CommonInput
            setReboot={setReboot}
            reboot={reboot}
            setGenesis={setGenesis}
            genesis={genesis}
            setCombat={setCombat}
            combat={combat}
            mugongSoul={mugongSoul}
            setMugongSoul={setMugongSoul}
            myClass={myClass}
            setUseRuinForceShild={setUseRuinForceShild}
            useRuinForceShild={useRuinForceShild}
            epiSoul={epiSoul}
            setEpiSoul={setEpiSoul}
            setOneHandSword={setOneHandSword}
            oneHandSword={oneHandSword}
            setLevel={setLevel}
            setMyClass={setMyClass}
            setHp={setHp}
            setStr={setStr}
            setDex={setDex}
            setInt={setInt}
            setLuk={setLuk}
            setNoYongsaStat={setNoYongsaStat}
            setSimbolStat={setSimbolStat}
            setAbilityStat={setAbilityStat}
            setUnionStat={setUnionStat}
            setHyperStat={setHyperStat}
          />
          {/* 여기서부터 중앙 페이지 */}
          <DetailInput
            setHigherAtk={setHigherAtk}
            setLowerAtk={setLowerAtk}
            setDmg={setDmg}
            setBossDmg={setBossDmg}
            setBuffDuration={setBuffDuration}
            setIgnoreDef={setIgnoreDef}
            setCriticalDmg={setCriticalDmg}
            setCritical={setCritical}
            setWeaponAtk={setWeaponAtk}
            setAtkPercent={setAtkPercent}
            setMagicianLink={setMagicianLink}
            setThiefLink={setThiefLink}
            setKadenaLink={setKadenaLink}
            setIlliumLink={setIlliumLink}
            setArkLink={setArkLink}
            setKainLink={setKainLink}
            setMercedesUnion={setMercedesUnion}
            setWildhunterUnion={setWildhunterUnion}
            secondAbility={secondAbility}
            thirdAbility={thirdAbility}
            firstAbility={firstAbility}
            setFirstAbility={setFirstAbility}
            firstOption={firstOption}
            firstValue={firstValue}
            setFirstValue={setFirstValue}
            setSecondAbility={setSecondAbility}
            secondOption={secondOption}
            secondValue={secondValue}
            setSecondValue={setSecondValue}
            setThirdAbility={setThirdAbility}
            thirdOption={thirdOption}
            thirdValue={thirdValue}
            setThirdValue={setThirdValue}
            setFirstOption={setFirstOption}
            setSecondOption={setSecondOption}
            setThirdOption={setThirdOption}
          />
          {/* 여기서부터 우측 페이지 */}
          <DopingInput
            setNoblessBoss={setNoblessBoss}
            setNoblessDmg={setNoblessDmg}
            setNoblessCriDmg={setNoblessCriDmg}
            setNoblessIgnore={setNoblessIgnore}
            setHerosHawl={setHerosHawl}
            setDopingShiningRed={setDopingShiningRed}
            setDopingBigHero={setDopingBigHero}
            setDopingSuperPower={setDopingSuperPower}
            setDopingExtreme={setDopingExtreme}
            setDopingGuildBlessing={setDopingGuildBlessing}
            setDopingUnionsPower={setDopingUnionsPower}
            setDopingUrus={setDopingUrus}
            setDopingFish={setDopingFish}
            setDopingStatPotion={setDopingStatPotion}
            setDopingLegendHero={setDopingLegendHero}
            setDopingJangBi={setDopingJangBi}
            setDopingRebootAtkPotion={setDopingRebootAtkPotion}
            setDopingDragonsMeal={setDopingDragonsMeal}
            noblessBoss={noblessBoss}
            noblessDmg={noblessDmg}
            noblessCriDmg={noblessCriDmg}
            noblessIgnore={noblessIgnore}
            herosHawl={herosHawl}
            setNoblessBossValue={setNoblessBossValue}
            setNoblessDmgValue={setNoblessDmgValue}
            setNoblessCriDmgValue={setNoblessCriDmgValue}
            setNoblessIgnoreValue={setNoblessIgnoreValue}
            dopingShiningRed={dopingShiningRed}
            dopingSuperPower={dopingSuperPower}
            dopingExtreme={dopingExtreme}
            dopingGuildBlessing={dopingGuildBlessing}
            dopingUnionsPower={dopingUnionsPower}
            dopingUrus={dopingUrus}
            dopingBigHero={dopingBigHero}
            dopingLegendHero={dopingLegendHero}
            dopingJangBi={dopingJangBi}
            dopingFish={dopingFish}
            dopingRebootAtkPotion={dopingRebootAtkPotion}
            dopingDragonsMeal={dopingDragonsMeal}
            dopingStatPotion={dopingStatPotion}
            setDopingStatPotionValue={setDopingStatPotionValue}
          />
        </StyledDiv>
        <div>
          <EndButton
            onClick={() => {
              submitData();
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
`;

const EndButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  width: 100px;
  height: 50px;
`;
