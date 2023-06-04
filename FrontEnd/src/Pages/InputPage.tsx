import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FilteringOptions from "./FilteringOptions";
import DropDown from "../Components/Common/DropDown";

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
  // const [magicAtk, setMagicAtk] = React.useState(0);
  const [weaponAtk, setWeaponAtk] = React.useState(0);
  // const [weaponMagicAtk, setWeaponMagicAtk] = React.useState(0);
  const [atkPercent, setAtkPercent] = React.useState(0);
  // const [maginAtkPercent, setMagicAtkPercent] = React.useState(0);
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
  const [dopingBigHero, setDopingBigHero] = React.useState(false);
  const [dopingLegendHero, setDopingLegendHero] = React.useState(false);
  const [dopingJangBi, setDopingJangBi] = React.useState(false);
  const [dopingSuperPower, setDopingSuperPower] = React.useState(false);
  const [dopingExtreme, setDopingExtreme] = React.useState(false);
  const [dopingGuildBlessing, setDopingGuildBlessing] = React.useState(false);
  const [dopingUnionsPower, setDopingUnionsPower] = React.useState(false);
  const [dopingUrus, setDopingUrus] = React.useState(false);
  const [dopingFish, setDopingFish] = React.useState(false);
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
        dopingStatPotion: dopingStatPotion ? dopingStatPotionValue : 0,
      },
    };
    console.log(data);
    return data;
  }

  // 첫번째 줄 어빌리티
  React.useEffect(() => {
    setFirstValue("");
    if (firstAbility.includes("재사용")) {
      setFirstOption(FilteringOptions.numbers.reset_Legendary);
    } else {
      setFirstOption([]);
    }
  }, [firstAbility]);

  // 두번째 줄 어빌리티
  React.useEffect(() => {
    setSecondValue("");
    if (secondAbility.includes("재사용")) {
      setSecondOption(FilteringOptions.numbers.reset_Unique);
    } else if (secondAbility.includes("상태")) {
      setSecondOption(FilteringOptions.numbers.debuffBonusDamage);
    } else {
      setSecondOption([]);
    }
  }, [secondAbility]);

  // 세번째 줄 어빌리티
  React.useEffect(() => {
    setThirdValue("");
    if (thirdAbility.includes("재사용")) {
      setThirdOption(FilteringOptions.numbers.reset_Unique);
    } else if (thirdAbility.includes("상태")) {
      setThirdOption(FilteringOptions.numbers.debuffBonusDamage);
    } else {
      setThirdOption([]);
    }
  }, [thirdAbility]);

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
          <StyledStatDetail style={{ width: "fit-content" }}>
            <div>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>
                    <StyledBuffButton
                      onClick={() => {
                        setReboot(!reboot);
                      }}
                    >
                      {!reboot ? (
                        <SelectedImg
                          src="./images/server_mainserver.png"
                          alt="본섭"
                          title="본섭"
                        />
                      ) : (
                        <SelectedImg
                          src="./images/server_reboot.png"
                          alt="리부트"
                          title="리부트"
                        />
                      )}
                    </StyledBuffButton>
                    <StyledBuffButton
                      onClick={() => {
                        setGenesis(!genesis);
                      }}
                    >
                      {!genesis ? (
                        <SelectedImg
                          src="./images/item_genesis_no.png"
                          alt="노해방"
                          title="노해방"
                        />
                      ) : (
                        <SelectedImg
                          src="./images/item_genesis.png"
                          alt="해방"
                          title="해방"
                        />
                      )}
                    </StyledBuffButton>
                    <StyledBuffButton
                      onClick={() => {
                        setCombat(!combat);
                      }}
                    >
                      {combat ? (
                        <SelectedImg
                          src="./images/skill_combat.png"
                          alt="컴뱃O"
                          title="컴뱃O"
                        />
                      ) : (
                        <SelectedImg
                          src="./images/skill_combat_no.png"
                          alt="컴뱃X"
                          title="컴뱃X"
                        />
                      )}
                    </StyledBuffButton>
                    <StyledBuffButton
                      onClick={() => {
                        if (mugongSoul <= 1) {
                          setMugongSoul(mugongSoul + 1);
                        } else if (mugongSoul === 2) {
                          setMugongSoul(0);
                        }
                      }}
                    >
                      {mugongSoul === 0 ? (
                        <SelectedImg
                          src="./images/soul_mugong_no.png"
                          alt="무공소울X"
                          title="무공소울X"
                        />
                      ) : mugongSoul === 1 ? (
                        <SelectedImg
                          src="./images/soul_mugong.png"
                          alt="무공1렙"
                          title="무공소울 1레벨 사용"
                        />
                      ) : (
                        <SelectedImg
                          src="./images/soul_mugong2.png"
                          alt="무공2렙"
                          title="무공소울 2레벨 사용"
                        />
                      )}
                    </StyledBuffButton>
                  </div>
                  <div>
                    {myClass === "데몬슬레이어" || myClass === "데몬어벤져" ? (
                      <StyledBuffButton
                        onClick={() => {
                          setUseRuinForceShild(!useRuinForceShild);
                        }}
                      >
                        {!useRuinForceShild ? (
                          <SelectedImg
                            src="./images/item_ruin_no.png"
                            alt="루포실X"
                            title="루포실X"
                          />
                        ) : (
                          <SelectedImg
                            src="./images/item_ruin.png"
                            alt="루포실 사용"
                            title="루포실 사용"
                          />
                        )}
                      </StyledBuffButton>
                    ) : (
                      <StyledBuffButton>
                        <SelectedImg
                          src="./images/blank.png"
                          alt="미사용"
                          title="미사용"
                        />
                      </StyledBuffButton>
                    )}
                    {myClass === "데몬어벤져" ? (
                      <StyledBuffButton
                        onClick={() => {
                          if (epiSoul <= 1) {
                            setEpiSoul(epiSoul + 1);
                          } else if (epiSoul === 2) {
                            setEpiSoul(0);
                          }
                        }}
                      >
                        {epiSoul === 0 ? (
                          <SelectedImg
                            src="./images/soul_epi_no.png"
                            alt="에피X"
                            title="에피네아 소울 미사용"
                          />
                        ) : epiSoul === 1 ? (
                          <SelectedImg
                            src="./images/soul_epi.png"
                            alt="에피1렙"
                            title="에피소울 1레벨 사용"
                          />
                        ) : (
                          <SelectedImg
                            src="./images/soul_epi2.png"
                            alt="에피2렙"
                            title="에피소울 2레벨 사용"
                          />
                        )}
                      </StyledBuffButton>
                    ) : (
                      <StyledBuffButton>
                        <SelectedImg
                          src="./images/blank.png"
                          alt="미사용"
                          title="미사용"
                        />
                      </StyledBuffButton>
                    )}
                    {myClass === "히어로" || myClass === "팔라딘" ? (
                      <StyledBuffButton
                        onClick={() => {
                          setOneHandSword(!oneHandSword);
                        }}
                      >
                        {!oneHandSword ? (
                          <SelectedImg
                            src="./images/sword_twohand.png"
                            alt="두손검 사용"
                            title="두손검 사용"
                          />
                        ) : (
                          <SelectedImg
                            src="./images/sword_onehand.png"
                            alt="한손검 사용"
                            title="한손검 사용"
                          />
                        )}
                      </StyledBuffButton>
                    ) : (
                      <StyledBuffButton>
                        <SelectedImg
                          src="./images/blank.png"
                          alt="미사용"
                          title="미사용"
                        />
                      </StyledBuffButton>
                    )}
                  </div>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    레벨
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="레벨"
                    title="현재 레벨"
                    onChange={(e) => {
                      setLevel(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    직업
                  </StyledSmallTitle>
                  <InputStat
                    type="string"
                    placeholder="직업"
                    title="정확하게 입력 안 하면 인식 못함."
                    onChange={(e) => {
                      setMyClass(e.target.value);
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              {/* <OtherContainerBox>
                <OtherContainer>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "1rem 1rem 1rem 3rem",
                    }}
                  >
                    <img src="./images/nun.png" alt="Nun Image" />
                  </div>
                </OtherContainer>
              </OtherContainerBox> */}
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    HP
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="총 HP 수치"
                    title="데몬어벤져는 반드시 총 HP를 입력할 것"
                    onChange={(e) => {
                      setHp(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    STR
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="힘 수치"
                    title="메용 포함 수치"
                    onChange={(e) => {
                      setStr(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    DEX
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="민첩 수치"
                    title="메용 포함 수치"
                    onChange={(e) => {
                      setDex(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    INT
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="지능 수치"
                    title="메용 포함 수치"
                    onChange={(e) => {
                      setInt(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    LUK
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="행운 수치"
                    title="메용 포함 수치"
                    onChange={(e) => {
                      setLuk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    메용X 주스텟
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="메이플 용사를 끈 상태의 주스텟"
                    title="선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                    onChange={(e) => {
                      setNoYongsaStat(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    심볼 스텟 수치
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={0}
                    placeholder="아케인심볼 + 어센틱심볼로 증가한 주스텟"
                    title="선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                    onChange={(e) => {
                      setSimbolStat(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    어빌리티 스텟
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="어빌리티로 증가한 주스텟"
                    title="선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                    onChange={(e) => {
                      setAbilityStat(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    유니온 스텟
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="유니온 공격대 배치로 증가한 주스텟"
                    title="선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                    onChange={(e) => {
                      setUnionStat(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    하이퍼스텟
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="하이퍼스탯으로 증가한 주스텟"
                    title="선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                    onChange={(e) => {
                      setHyperStat(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
            </div>
          </StyledStatDetail>
          {/* 여기서부터 중앙 페이지 */}
          <StyledStatDetail>
            <div>
              <StyledDetailTitle>상세스탯</StyledDetailTitle>
              <InputStatContainer>
                <StyledStatTitle>스탯 공격력</StyledStatTitle>
                <StyledStatContainer>
                  <InputStat
                    type="number"
                    placeholder="앞스공(낮은 숫자)"
                    onChange={(e) => {
                      setHigherAtk(parseInt(e.target.value));
                    }}
                  />
                  <InputStat
                    type="number"
                    placeholder="뒷스공(큰 숫자)"
                    onChange={(e) => {
                      setLowerAtk(parseInt(e.target.value));
                    }}
                  />
                </StyledStatContainer>
              </InputStatContainer>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>데미지</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="데미지%"
                    title="스텟창에 표기되는 데미지 % 수치"
                    onChange={(e) => {
                      setDmg(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>보스 데미지</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="보스 데미지%"
                    title="스텟창에 표기되는 보스 데미지 % 수치"
                    onChange={(e) => {
                      setBossDmg(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>최종 데미지</StyledSmallTitle>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      border: "1px solid #aaa",
                      width: "56.7%",
                      backgroundColor: "#eee",
                    }}
                  >
                    62
                  </div>
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>버프 지속시간</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="버프 지속시간%"
                    title="스텟창에 표기되는 버프 지속시간 % 수치"
                    onChange={(e) => {
                      setBuffDuration(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>방어율 무시</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="방무%"
                    title="스텟창에 표기되는 방어율 무시 % 수치"
                    onChange={(e) => {
                      setIgnoreDef(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>크리 데미지</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="크뎀%"
                    title="스텟창에 표기되는 크리티컬 데미지 % 수치"
                    onChange={(e) => {
                      setCriticalDmg(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>크리티컬 확률</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    max={100}
                    placeholder="쓸샾포함 크확"
                    title="크리티컬 확률(궁수는 반드시 제출)"
                    onChange={(e) => {
                      setCritical(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>무기 공/마</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="무기 총 공격력"
                    title="장착한 무기의 총 공격력 or 마력 수치"
                    onChange={(e) => {
                      setWeaponAtk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer style={{ width: "50%" }}>
                  <StyledSmallTitle>공/마%</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="총 공격력%"
                    title="장비 공격력% or 마력% 합계, 소울웨폰 수치도 반드시 합산"
                    onChange={(e) => {
                      setAtkPercent(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <div style={{ display: "inline-flex", width: "50%" }}>
                  <OtherContainer>
                    <StyledSmallTitle style={{ width: "29px" }}>
                      모법
                    </StyledSmallTitle>
                    <InputSmallBox
                      style={{ width: "50px" }}
                      type="number"
                      min={0}
                      max={6}
                      placeholder="링크Lv"
                      title="모험가 법사 링크"
                      onChange={(e) => {
                        setMagicianLink(parseInt(e.target.value));
                      }}
                    />
                  </OtherContainer>
                  <OtherContainer>
                    <StyledSmallTitle style={{ width: "29px" }}>
                      모도
                    </StyledSmallTitle>
                    <InputSmallBox
                      style={{ width: "50px" }}
                      type="number"
                      min={0}
                      max={6}
                      placeholder="링크Lv"
                      title="모험가 법사 링크"
                      onChange={(e) => {
                        setThiefLink(parseInt(e.target.value));
                      }}
                    />
                  </OtherContainer>
                </div>
              </OtherContainerBox>
              <OtherContainerBox>
                <div style={{ display: "inline-flex", width: "51%" }}>
                  <OtherContainer>
                    <StyledSmallTitle style={{ width: "29px" }}>
                      카데나
                    </StyledSmallTitle>
                    <InputSmallBox
                      style={{ width: "50px" }}
                      type="number"
                      min={0}
                      max={2}
                      placeholder="링크Lv"
                      title="카데나 링크"
                      onChange={(e) => {
                        setKadenaLink(parseInt(e.target.value));
                      }}
                    />
                  </OtherContainer>
                  <OtherContainer>
                    <StyledSmallTitle style={{ width: "29px" }}>
                      일리움
                    </StyledSmallTitle>
                    <InputSmallBox
                      style={{ width: "50px" }}
                      type="number"
                      min={0}
                      max={6}
                      placeholder="링크Lv"
                      title="일리움 링크"
                      onChange={(e) => {
                        setIlliumLink(parseInt(e.target.value));
                      }}
                    />
                  </OtherContainer>
                </div>
                <div style={{ display: "inline-flex", width: "50%" }}>
                  <OtherContainer>
                    <StyledSmallTitle style={{ width: "29px" }}>
                      아크
                    </StyledSmallTitle>
                    <InputSmallBox
                      style={{ width: "50px" }}
                      type="number"
                      min={0}
                      max={6}
                      placeholder="링크Lv"
                      title="아크 링크"
                      onChange={(e) => {
                        setArkLink(parseInt(e.target.value));
                      }}
                    />
                  </OtherContainer>
                  <OtherContainer>
                    <StyledSmallTitle style={{ width: "29px" }}>
                      카인
                    </StyledSmallTitle>
                    <InputSmallBox
                      style={{ width: "50px" }}
                      type="number"
                      min={0}
                      max={6}
                      placeholder="링크Lv"
                      title="카인 링크"
                      onChange={(e) => {
                        setKainLink(parseInt(e.target.value));
                      }}
                    />
                  </OtherContainer>
                </div>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>메르 유니온</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={1}
                    placeholder="메르 유니온 레벨"
                    title="유니온에 배치한 메르세데스 캐릭터 레벨"
                    onChange={(e) => {
                      setMercedesUnion(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>와헌 유니온</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={1}
                    placeholder="와헌 유니온 레벨"
                    title="유니온에 배치한 와일드헌터 캐릭터 레벨"
                    onChange={(e) => {
                      setWildhunterUnion(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <StyledAbilityTitle>
                <span>어빌리티</span>
              </StyledAbilityTitle>
              <div style={{ margin: "1rem 0rem" }}>
                <div style={{ display: "flex" }}>
                  <DropDown
                    list={FilteringOptions.options.first.filter(
                      (data: string) =>
                        data !== secondAbility && data !== thirdAbility
                    )}
                    selected={firstAbility}
                    setSelected={setFirstAbility}
                    style={{ width: "37rem" }}
                  />
                  {firstAbility.includes("재사용") && (
                    <DropDown
                      list={firstOption}
                      selected={firstValue}
                      setSelected={setFirstValue}
                      style={{ width: "11rem" }}
                    />
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <DropDown
                    list={FilteringOptions.options.second.filter(
                      (data: string) =>
                        data !== firstAbility && data !== thirdAbility
                    )}
                    selected={secondAbility}
                    setSelected={setSecondAbility}
                    style={{ width: "37rem" }}
                  />
                  {(secondAbility.includes("재사용") ||
                    secondAbility.includes("상태")) && (
                    <DropDown
                      list={secondOption}
                      selected={secondValue}
                      setSelected={setSecondValue}
                      style={{ width: "11rem" }}
                    />
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <DropDown
                    list={FilteringOptions.options.third.filter(
                      (data: string) =>
                        data !== secondAbility && data !== firstAbility
                    )}
                    selected={thirdAbility}
                    setSelected={setThirdAbility}
                    style={{ width: "37rem" }}
                  />
                  {(thirdAbility.includes("재사용") ||
                    thirdAbility.includes("상태")) && (
                    <DropDown
                      list={thirdOption}
                      selected={thirdValue}
                      setSelected={setThirdValue}
                      style={{ width: "11rem" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </StyledStatDetail>
          {/* 여기서부터 우측 페이지 */}
          <StyledStatDetail style={{ width: "40rem" }}>
            <div>
              <StyledDetailTitle style={{ width: "37.8rem" }}>
                추가정보
              </StyledDetailTitle>
              {/* 도핑 전체선택 on / off */}
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <DopingSelectButton
                    onClick={() => {
                      setNoblessBoss(true);
                      setNoblessDmg(true);
                      setNoblessCriDmg(true);
                      setNoblessIgnore(true);
                      setHerosHawl(true);
                      setDopingShiningRed(true);
                      setDopingBigHero(true);
                      setDopingSuperPower(true);
                      setDopingExtreme(true);
                      setDopingGuildBlessing(true);
                      setDopingUnionsPower(true);
                      setDopingUrus(true);
                      setDopingFish(true);
                      setDopingStatPotion(true);
                    }}
                  >
                    전체선택
                  </DopingSelectButton>
                  <DopingSelectButton
                    onClick={() => {
                      setNoblessBoss(false);
                      setNoblessDmg(false);
                      setNoblessCriDmg(false);
                      setNoblessIgnore(false);
                      setHerosHawl(false);
                      setDopingShiningRed(false);
                      setDopingBigHero(false);
                      setDopingLegendHero(false);
                      setDopingJangBi(false);
                      setDopingSuperPower(false);
                      setDopingExtreme(false);
                      setDopingGuildBlessing(false);
                      setDopingUnionsPower(false);
                      setDopingUrus(false);
                      setDopingFish(false);
                      setDopingStatPotion(false);
                    }}
                  >
                    전체해제
                  </DopingSelectButton>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton
                    onClick={() => {
                      setNoblessBoss(!noblessBoss);
                    }}
                  >
                    {!noblessBoss ? (
                      <NonSelectedImg
                        src="./images/noblessboss_no.png"
                        alt="노블보공"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/noblessboss.png"
                        alt="노블보공"
                      />
                    )}
                  </StyledBuffButton>
                  <InputDopingBox
                    type="number"
                    min={0}
                    max={15}
                    title="노블 보공 레벨, 숫자 몇을 입력하든 0~15사이의 값이 제출됩니다."
                    onChange={(e) => {
                      let value = 0;
                      if (parseInt(e.target.value) >= 15) {
                        value = 15;
                      } else if (parseInt(e.target.value) <= 0) {
                        value = 0;
                      } else {
                        value = parseInt(e.target.value);
                      }
                      setNoblessBossValue(value);
                    }}
                  />
                  <StyledBuffButton
                    onClick={() => {
                      setNoblessDmg(!noblessDmg);
                    }}
                  >
                    {!noblessDmg ? (
                      <NonSelectedImg
                        src="./images/noblessdam_no.png"
                        alt="노블뎀지"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/noblessdam.png"
                        alt="노블뎀지"
                      />
                    )}
                  </StyledBuffButton>
                  <InputDopingBox
                    type="number"
                    min={0}
                    max={15}
                    title="노블 데미지 레벨, 숫자 몇을 입력하든 0~15사이의 값이 제출됩니다."
                    onChange={(e) => {
                      let value = 0;
                      if (parseInt(e.target.value) >= 15) {
                        value = 15;
                      } else if (parseInt(e.target.value) <= 0) {
                        value = 0;
                      } else {
                        value = parseInt(e.target.value);
                      }
                      setNoblessDmgValue(value);
                    }}
                  />
                  <StyledBuffButton
                    onClick={() => {
                      setNoblessCriDmg(!noblessCriDmg);
                    }}
                  >
                    {!noblessCriDmg ? (
                      <NonSelectedImg
                        src="./images/noblesscridam_no.png"
                        alt="노블크뎀"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/noblesscridam.png"
                        alt="노블크뎀"
                      />
                    )}
                  </StyledBuffButton>
                  <InputDopingBox
                    type="number"
                    min={0}
                    max={15}
                    title="노블 크뎀 레벨, 숫자 몇을 입력하든 0~15사이의 값이 제출됩니다."
                    onChange={(e) => {
                      let value = 0;
                      if (parseInt(e.target.value) >= 15) {
                        value = 15;
                      } else if (parseInt(e.target.value) <= 0) {
                        value = 0;
                      } else {
                        value = parseInt(e.target.value);
                      }
                      setNoblessCriDmgValue(value);
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton
                    onClick={() => {
                      setHerosHawl(!herosHawl);
                    }}
                  >
                    {!herosHawl ? (
                      <NonSelectedImg src="./images/hero_no.png" alt="영메" />
                    ) : (
                      <SelectedImg src="./images/hero.png" alt="영메" />
                    )}
                  </StyledBuffButton>
                  <StyledBuffButton
                    onClick={() => {
                      setDopingShiningRed(!dopingShiningRed);
                    }}
                  >
                    {!dopingShiningRed ? (
                      <NonSelectedImg
                        src="./images/shiningred_no.png"
                        alt="반빨별"
                      />
                    ) : (
                      <SelectedImg src="./images/shiningred.png" alt="반빨별" />
                    )}
                  </StyledBuffButton>
                  <div
                    style={{ border: "1px solid #ccc", borderRadius: "12px" }}
                  >
                    <StyledBuffButton
                      onClick={() => {
                        setDopingBigHero(!dopingBigHero);
                        setDopingLegendHero(false);
                        setDopingJangBi(false);
                      }}
                    >
                      {!dopingBigHero ? (
                        <NonSelectedImg
                          src="./images/bighero_no.png"
                          alt="2비약"
                        />
                      ) : (
                        <SelectedImg src="./images/bighero.png" alt="2비약" />
                      )}
                    </StyledBuffButton>
                    <StyledBuffButton
                      onClick={() => {
                        setDopingBigHero(false);
                        setDopingLegendHero(!dopingLegendHero);
                        setDopingJangBi(false);
                      }}
                    >
                      {!dopingLegendHero ? (
                        <NonSelectedImg
                          src="./images/legendhero_no.png"
                          alt="2비약"
                        />
                      ) : (
                        <SelectedImg
                          src="./images/legendhero.png"
                          alt="2비약"
                        />
                      )}
                    </StyledBuffButton>
                    <StyledBuffButton
                      onClick={() => {
                        setDopingBigHero(false);
                        setDopingLegendHero(false);
                        setDopingJangBi(!dopingJangBi);
                      }}
                    >
                      {!dopingJangBi ? (
                        <NonSelectedImg
                          src="./images/jangbi_no.png"
                          alt="2비약"
                        />
                      ) : (
                        <SelectedImg src="./images/jangbi.png" alt="2비약" />
                      )}
                    </StyledBuffButton>
                  </div>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton
                    onClick={() => {
                      setDopingSuperPower(!dopingSuperPower);
                    }}
                  >
                    {!dopingSuperPower ? (
                      <NonSelectedImg
                        src="./images/superpower_no.png"
                        alt="슈퍼파워"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/superpower.png"
                        alt="슈퍼파워"
                      />
                    )}
                  </StyledBuffButton>
                  <StyledBuffButton
                    onClick={() => {
                      setDopingExtreme(!dopingExtreme);
                    }}
                  >
                    {!dopingExtreme ? (
                      <NonSelectedImg
                        src="./images/extreme_no.png"
                        alt="익스물약"
                      />
                    ) : (
                      <SelectedImg src="./images/extreme.png" alt="익스물약" />
                    )}
                  </StyledBuffButton>
                  <StyledBuffButton
                    onClick={() => {
                      setDopingGuildBlessing(!dopingGuildBlessing);
                    }}
                  >
                    {!dopingGuildBlessing ? (
                      <NonSelectedImg src="./images/guild_no.png" alt="길축" />
                    ) : (
                      <SelectedImg src="./images/guild.png" alt="길축" />
                    )}
                  </StyledBuffButton>
                  <StyledBuffButton
                    onClick={() => {
                      setDopingUnionsPower(!dopingUnionsPower);
                    }}
                  >
                    {!dopingUnionsPower ? (
                      <NonSelectedImg src="./images/union_no.png" alt="유힘" />
                    ) : (
                      <SelectedImg src="./images/union.png" alt="유힘" />
                    )}
                  </StyledBuffButton>
                  <StyledBuffButton
                    onClick={() => {
                      setDopingUrus(!dopingUrus);
                    }}
                  >
                    {!dopingUrus ? (
                      <NonSelectedImg src="./images/urus_no.png" alt="우뿌" />
                    ) : (
                      <SelectedImg src="./images/urus.png" alt="우뿌" />
                    )}
                  </StyledBuffButton>
                  <StyledBuffButton
                    onClick={() => {
                      setDopingFish(!dopingFish);
                    }}
                  >
                    {!dopingFish ? (
                      <NonSelectedImg
                        src="./images/fish_no.png"
                        alt="뿌리기2"
                      />
                    ) : (
                      <SelectedImg src="./images/fish.png" alt="뿌리기2" />
                    )}
                  </StyledBuffButton>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton
                    onClick={() => {
                      setDopingStatPotion(!dopingStatPotion);
                    }}
                  >
                    {!dopingStatPotion ? (
                      <NonSelectedImg
                        src="./images/statpotion_no.png"
                        alt="주스텟물약"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/statpotion.png"
                        alt="주스텟물약"
                      />
                    )}
                  </StyledBuffButton>
                  <InputDopingBox
                    type="number"
                    min={0}
                    max={30}
                    title="주스텟 물약 수치(0~30) 입력"
                    onChange={(e) => {
                      let value = 0;
                      if (parseInt(e.target.value) >= 30) {
                        value = 30;
                      } else if (parseInt(e.target.value) <= 0) {
                        value = 0;
                      } else {
                        value = parseInt(e.target.value);
                      }
                      setDopingStatPotionValue(value);
                    }}
                  />
                  <StyledBuffButton
                    onClick={() => {
                      setNoblessIgnore(!noblessIgnore);
                    }}
                  >
                    {!noblessIgnore ? (
                      <NonSelectedImg
                        src="./images/noblessignore_no.png"
                        alt="노블방무"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/noblessignore.png"
                        alt="노블방무"
                      />
                    )}
                  </StyledBuffButton>
                  <InputDopingBox
                    type="number"
                    min={0}
                    max={15}
                    title="노블 방무 레벨, 숫자 몇을 입력하든 0~15사이의 값이 제출됩니다."
                    onChange={(e) => {
                      let value = 0;
                      if (parseInt(e.target.value) >= 15) {
                        value = 15;
                      } else if (parseInt(e.target.value) <= 0) {
                        value = 0;
                      } else {
                        value = parseInt(e.target.value);
                      }
                      setNoblessIgnoreValue(value);
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton>
                    <NonSelectedImg src="./images/buff.png" alt="추가도핑1" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <NonSelectedImg src="./images/buff.png" alt="추가도핑2" />
                  </StyledBuffButton>
                </OtherContainer>
              </OtherContainerBox>
            </div>
          </StyledStatDetail>
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

// 상세스텟 타이틀
const StyledDetailTitle = styled.div`
  background: linear-gradient(to top, rgb(136, 187, 221), rgb(0, 102, 153));
  color: white;
  text-shadow: -1px -1px 0 rgb(34, 85, 136), 1px -1px 0 rgb(34, 85, 136),
    -1px 1px 0 rgb(34, 85, 136), 1px 1px 0 rgb(34, 85, 136);
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding-left: 1rem;
  margin-bottom: 0.8rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 1rem;
  /* width: 200rem; */
`;

const StyledStatDetail = styled.div`
  display: flex;
  // align-items: center;
  // justify-content: center;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 1rem;
  width: 360px;
  margin: 1rem 1rem;
`;

//-----스텟 공격력 부분을 꾸미는 컴포넌트-----//
const InputStatContainer = styled.div`
  /* border: 1px solid #dddddd; */
  border-radius: 1rem;
  margin: 0.2rem 0.2rem;
  padding: 0.1rem 0.1rem;
`;

const StyledStatTitle = styled.div`
  display: flex;
  background: linear-gradient(
    to bottom,
    rgb(187, 187, 187),
    rgb(119, 119, 119)
  );
  border-radius: 1rem 0 0 1rem;
  float: left;
  justify-content: center;
  align-items: center;
  height: 7rem;
  width: 10rem;
  color: white;
  text-shadow: -1px -1px 0 rgb(102, 102, 102), 1px -1px 0 rgb(102, 102, 102),
    -1px 1px 0 rgb(102, 102, 102), 1px 1px 0 rgb(102, 102, 102);
`;

const StyledStatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStat = styled.input`
  display: flex;
  width: 100%;
  text-align: center;
  &::placeholder {
    color: #bbb;
    font-size: 11px;
    /* font-style: italic; */
  }
`;

//-----다른 스텟 부분을 꾸미는 컴포넌트-----//
const OtherContainerBox = styled.div`
  display: flex;
  width: 100%;
`;

const OtherContainer = styled.div`
  /* border: 1px solid #dddddd; */
  align-items: center;
  border-radius: 1rem;
  display: flex;
  width: 100%;
  margin: 0.2rem 0.2rem;
  padding: 0.1rem 0.1rem;
`;

const StyledSmallTitle = styled.div`
  display: flex;
  background: linear-gradient(
    to bottom,
    rgb(187, 187, 187),
    rgb(119, 119, 119)
  );
  border-radius: 1rem 0 0 1rem;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 10rem;
  color: #fff;
  font-size: 1.5rem;
  text-shadow: -1px -1px 0 rgb(102, 102, 102), 1px -1px 0 rgb(102, 102, 102),
    -1px 1px 0 rgb(102, 102, 102), 1px 1px 0 rgb(102, 102, 102);
`;

const InputSmallBox = styled.input`
  display: flex;
  justify-content: center;
  width: 57%;
  text-align: center;
  &::placeholder {
    color: #bbb;
    font-size: 11px;
    /* font-style: italic; */
  }
`;

// 어빌리티 타이틀
const StyledAbilityTitle = styled.div`
  background: linear-gradient(to top, rgb(204, 221, 136), rgb(136, 187, 34));
  color: white;
  text-shadow: -1px -1px 0 rgb(85, 136, 17), 1px -1px 0 rgb(85, 136, 17),
    -1px 1px 0 rgb(85, 136, 17), 1px 1px 0 rgb(85, 136, 17);
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  padding-left: 1rem;
  margin-top: 0.8rem;
  padding-right: 1rem;
`;

// 버프 사용 버튼
const StyledBuffButton = styled.button`
  background-color: #fff;
  margin: 1.8px;
  width: 40px;
  height: 40px;
  border-radius: 14px;
`;

// 버프 사용 버튼
const StyledBlankButton = styled.div`
  background-color: #fff;
  margin: 1.8px;
  width: 40px;
  height: 40px;
  border-radius: 14px;
`;

const InputDopingBox = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12%;
  height: 30px;
  text-align: center;
  font-size: 11px;
  padding-left: 4px;
  /* &::placeholder {
    color: #bbb;
    font-size: 11px;
    font-style: italic;
  } */
`;

const DopingSelectButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
`;

const NonSelectedImg = styled.img`
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
`;

const SelectedImg = styled.img`
  /* border: 1px solid red; */
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
`;

const EndButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  width: 100px;
  height: 50px;
`;
