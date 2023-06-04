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

  // 스텟 입력 관리
  const [server, setServer] = React.useState("");
  const [level, setLevel] = React.useState(0);
  const [myClass, setMyClass] = React.useState("");
  const [hp, setHp] = React.useState(0);
  const [str, setStr] = React.useState(0);
  const [dex, setDex] = React.useState(0);
  const [int, setInt] = React.useState(0);
  const [luk, setLuk] = React.useState(0);
  const [noYongsaStat, setNoYongsaStat] = React.useState(0);
  const [higherAtk, setHigherAtk] = React.useState(0);
  const [lowerAtk, setLowerAtk] = React.useState(0);
  const [dmg, setDmg] = React.useState(0);
  const [bossDmg, setBossDmg] = React.useState(0);
  const [buffDuration, setBuffDuration] = React.useState(0);
  const [ignoreDef, setIgnoreDef] = React.useState(0);
  const [criticalDmg, setCriticalDmg] = React.useState(0);
  const [atk, setAtk] = React.useState(0);
  const [magicAtk, setMagicAtk] = React.useState(0);
  const [weaponAtk, setWeaponAtk] = React.useState(0);
  const [weaponMagicAtk, setWeaponMagicAtk] = React.useState(0);
  const [atkPercent, setAtkPercent] = React.useState(0);
  const [maginAtkPercent, setMagicAtkPercent] = React.useState(0);
  const [mercedesUnion, setMercedesUnion] = React.useState(0);
  const [wildhunterUnion, setWildhunterUnion] = React.useState(0);

  // 데이터를 제출하기 위해 정리하는 함수
  function submitData() {
    const data = {
      server: server,
      level: level,
      myClass: myClass,
      hp: hp,
      str: str,
      dex: dex,
      int: int,
      luk: luk,
      noYongsaStat: noYongsaStat,
      higherAtk: higherAtk,
      lowerAtk: lowerAtk,
      dmg: dmg,
      bossDmg: bossDmg,
      buffDuration: buffDuration,
      ignoreDef: ignoreDef,
      criticalDmg: criticalDmg,
      atk: atk,
      magicAtk: magicAtk,
      weaponAtk: weaponAtk,
      weaponMagicAtk: weaponMagicAtk,
      atkPercent: atkPercent,
      maginAtkPercent: maginAtkPercent,
      mercedesUnion: mercedesUnion,
      wildhunterUnion: wildhunterUnion,
      firstAbility: [firstAbility, firstValue],
      secondAbility: [secondAbility, secondValue],
      thirdAbility: [thirdAbility, thirdValue],
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
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    서버
                  </StyledSmallTitle>
                  <InputStat
                    type="string"
                    placeholder="본섭or리부트"
                    title="정확하게 입력 안 하면 반영 안 됩니다."
                    onChange={(e) => {
                      setServer(e.target.value);
                    }}
                  />
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
                    placeholder="레벨을 입력하세요"
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
                    placeholder="직업을 입력하세요"
                    title="정확하게 입력 안 하면 인식 못함."
                    onChange={(e) => {
                      setMyClass(e.target.value);
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
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
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    HP
                  </StyledSmallTitle>
                  <InputStat
                    type="number"
                    min={1}
                    placeholder="총 HP 수치를 입력하세요"
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
                    placeholder="힘 수치를 입력하세요"
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
                    placeholder="민첩 수치를 입력하세요"
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
                    placeholder="지능 수치를 입력하세요"
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
                    placeholder="행운 수치를 입력하세요"
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
                    placeholder="메이플 용사를 끈 주스텟을 입력하세요"
                    title="선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                    onChange={(e) => {
                      setNoYongsaStat(parseInt(e.target.value));
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
                    placeholder="앞스공(낮은 숫자)을 입력하세요"
                    onChange={(e) => {
                      setHigherAtk(parseInt(e.target.value));
                    }}
                  />
                  <InputStat
                    type="number"
                    placeholder="뒷스공(큰 숫자)을 입력하세요"
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
                  <StyledSmallTitle>공격력</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="스텟창 총 공격력"
                    title="스텟창에 표기되는 총 공격력 수치"
                    onChange={(e) => {
                      setAtk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>마력</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="스텟창 총 마력"
                    title="스텟창에 표기되는 총 마력 수치"
                    onChange={(e) => {
                      setMagicAtk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>무기 공격력</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="무기 공격력"
                    title="장착한 무기의 총 공격력 수치"
                    onChange={(e) => {
                      setWeaponAtk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>무기 마력</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="무기 마력"
                    title="장착한 무기의 총 마력 수치"
                    onChange={(e) => {
                      setWeaponMagicAtk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>공격력%</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="장비 공격력%"
                    title="장비 공격력% 합계, 소울웨폰 수치도 반드시 합산"
                    onChange={(e) => {
                      setAtkPercent(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>마력%</StyledSmallTitle>
                  <InputSmallBox
                    type="number"
                    min={0}
                    placeholder="장비 마력%"
                    title="장비 마력% 합계, 소울웨폰 수치도 반드시 합산"
                    onChange={(e) => {
                      setMagicAtkPercent(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
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
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton>
                    <img src="./images/noblessboss.png" alt="노블보공" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/noblessignore.png" alt="노블방무" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/noblessdam.png" alt="노블뎀지" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/noblesscridam.png" alt="노블크뎀" />
                  </StyledBuffButton>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton>
                    <img src="./images/hero.png" alt="영메" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/shiningred.png" alt="반빨별" />
                  </StyledBuffButton>
                  <div style={{ border: "1px solid #ccc" }}>
                    <StyledBuffButton>
                      <img src="./images/bighero.png" alt="2비약" />
                    </StyledBuffButton>
                    <StyledBuffButton>
                      <img src="./images/legendhero.png" alt="2비약" />
                    </StyledBuffButton>
                    <StyledBuffButton>
                      <img src="./images/jangbi.png" alt="2비약" />
                    </StyledBuffButton>
                  </div>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton>
                    <img src="./images/shiningred.png" alt="반빨별" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/extreme.png" alt="익스물약" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/guild.png" alt="길축" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/union.png" alt="유힘" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/urus.png" alt="우뿌" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="./images/superpower.png" alt="슈퍼파워" />
                  </StyledBuffButton>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <StyledBuffButton>
                    <img src="./images/fish.png" alt="뿌리기2" />
                  </StyledBuffButton>
                  <StyledBuffButton>
                    <img src="favicon.ico" alt="주스텟물약" />
                  </StyledBuffButton>
                </OtherContainer>
              </OtherContainerBox>
            </div>
          </StyledStatDetail>
          <button
            onClick={() => {
              submitData();
            }}
          >
            Submit
          </button>
          <button
            onClick={(e) => {
              window.location.reload();
            }}
          >
            초기화
          </button>
        </StyledDiv>
        <ReturnLink to="/"> ◀️ 돌아가기</ReturnLink>
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
