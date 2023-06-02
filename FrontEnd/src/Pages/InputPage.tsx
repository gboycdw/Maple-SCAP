import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FilteringOptions from "./FilteringOptions";

function InputPage() {
  // 어빌리티 상태관리
  const [firstAbility, setFirstAbility] = React.useState<any>("");
  const [firstOption, setFirstOption] = React.useState<any>("");
  const [firstValue, setFirstValue] = React.useState<any>("");
  const [secondAbility, setSecondAbility] = React.useState<string>("");
  const [secondOption, setSecondOption] = React.useState<any>("");
  const [secondValue, setSecondValue] = React.useState<any>("");
  const [thirdAbility, setThirdAbility] = React.useState<string>("");
  const [thirdOption, setThirdOption] = React.useState<any>("");
  const [thirdValue, setThirdValue] = React.useState<any>("");

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
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "reset_Legendary";
      setFirstOption(FilteringOptions.numbers[selectedCategory]);
    } else {
      setFirstOption([]);
    }
  }, [firstAbility]);

  // 두번째 줄 어빌리티
  React.useEffect(() => {
    setSecondValue("");
    if (secondAbility.includes("재사용")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "reset_Unique";
      setSecondOption(FilteringOptions.numbers[selectedCategory]);
    } else if (secondAbility.includes("상태")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "debuffBonusDamage";
      setSecondOption(FilteringOptions.numbers[selectedCategory]);
    } else {
      setSecondOption([]);
    }
  }, [secondAbility]);

  // 세번째 줄 어빌리티
  React.useEffect(() => {
    setThirdValue("");
    if (thirdAbility.includes("재사용")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "reset_Unique";
      setThirdOption(FilteringOptions.numbers[selectedCategory]);
    } else if (thirdAbility.includes("상태")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "debuffBonusDamage";
      setThirdOption(FilteringOptions.numbers[selectedCategory]);
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
                    <img src="./mueot.jpg" alt="Mueot Image" />
                    <img src="./nun.png" alt="Nun Image" />
                  </div>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    HP
                  </StyledSmallTitle>
                  <InputStat
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
                    onChange={(e) => {
                      setHigherAtk(parseInt(e.target.value));
                    }}
                  />
                  <InputStat
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
                    onChange={(e) => {
                      setDmg(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>보스 데미지</StyledSmallTitle>
                  <InputSmallBox
                    onChange={(e) => {
                      setBossDmg(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle>최종 데미지</StyledSmallTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>버프 지속시간</StyledSmallTitle>
                  <InputSmallBox
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
                    onChange={(e) => {
                      setIgnoreDef(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>크리 데미지</StyledSmallTitle>
                  <InputSmallBox
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
                    onChange={(e) => {
                      setAtk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>마력</StyledSmallTitle>
                  <InputSmallBox
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
                    onChange={(e) => {
                      setWeaponAtk(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>무기 마력</StyledSmallTitle>
                  <InputSmallBox
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
                    onChange={(e) => {
                      setAtkPercent(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>마력%</StyledSmallTitle>
                  <InputSmallBox
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
                    onChange={(e) => {
                      setMercedesUnion(parseInt(e.target.value));
                    }}
                  />
                </OtherContainer>
                <OtherContainer>
                  <StyledSmallTitle>와헌 유니온</StyledSmallTitle>
                  <InputSmallBox
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
                  <SelectCategory
                    options={FilteringOptions.options.first.filter(
                      (data) =>
                        data.label !== secondAbility &&
                        data.label !== thirdAbility
                    )}
                    defaultValue={FilteringOptions.options.first[0]}
                    styles={SelectStyles}
                    onChange={(selectedOption: any) => {
                      setFirstAbility(selectedOption.label);
                    }}
                  />
                  {firstAbility.includes("재사용") && (
                    <SelectValue
                      options={firstOption}
                      defaultValue={0}
                      styles={SelectStyles}
                      onChange={(selectedOption: any) => {
                        setFirstValue(selectedOption.label);
                      }}
                    />
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <SelectCategory
                    options={FilteringOptions.options.second.filter(
                      (data) =>
                        data.label !== firstAbility &&
                        data.label !== thirdAbility
                    )}
                    defaultValue={FilteringOptions.options.second[0]}
                    styles={SelectStyles}
                    onChange={(selectedOption: any) => {
                      setSecondAbility(selectedOption.label);
                    }}
                  />
                  {(secondAbility.includes("재사용") ||
                    secondAbility.includes("상태")) && (
                    <SelectValue
                      options={secondOption}
                      styles={SelectStyles}
                      onChange={(selectedOption: any) => {
                        setSecondValue(selectedOption.label);
                      }}
                    />
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <SelectCategory
                    options={FilteringOptions.options.third.filter(
                      (data) =>
                        data.label !== firstAbility &&
                        data.label !== secondAbility
                    )}
                    defaultValue={FilteringOptions.options.third[0]}
                    styles={SelectStyles}
                    onChange={(selectedOption: any) => {
                      setThirdAbility(selectedOption.label);
                    }}
                  />
                  {(thirdAbility.includes("재사용") ||
                    thirdAbility.includes("상태")) && (
                    <SelectValue
                      options={thirdOption}
                      defaultValue={thirdOption[0]}
                      styles={SelectStyles}
                      onChange={(selectedOption: any) => {
                        setThirdValue(selectedOption.label);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </StyledStatDetail>
          {/* 여기서부터 우측 페이지 */}
          <StyledStatDetail style={{ width: "fit-content" }}>
            <div>
              <StyledDetailTitle>도핑정보</StyledDetailTitle>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    도핑정보
                  </StyledSmallTitle>
                  <InputStat></InputStat>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSmallTitle style={{ width: "13.44rem" }}>
                    정리할것들
                  </StyledSmallTitle>
                  <InputStat value="도핑, 링크, 쿨감수치, 특수소울 등 정리"></InputStat>
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
  width: 50rem;
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
  width: 57%;
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

// Select 라이브러리를 사용하여 만든 드롭다운 박스의 스타일 지정
const SelectCategory = styled(Select)`
  width: 36rem;
  font-size: 1.8rem;
`;

// Select 라이브러리를 사용하여 만든 드롭다운 박스의 스타일 지정
const SelectValue = styled(Select)`
  width: 11rem;
  font-size: 1.8rem;
`;

// Select 라이브러리에서 사용할 세부 스타일 속성
const SelectStyles = {
  control: (provided: any) => ({
    ...provided,
    border: "1px solid #ccc",
    borderRadius: "4px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#38D411" : "white",
    color: state.isSelected ? "white" : "black",
    ":hover": {
      backgroundColor: state.isSelected ? "#38D411" : "#96DF84",
    },
  }),
};
