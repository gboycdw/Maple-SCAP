import React from "react";
import styled from "styled-components";
import Select from "react-select";
import { Link } from "react-router-dom";
import FilteringOptions from "./FilteringOptions";

function InputPage() {
  const [firstAbility, setFirstAbility] = React.useState<any>("");
  const [firstOption, setFirstOption] = React.useState<any>("");
  const [firstValue, setFirstValue] = React.useState<any>("");
  const [secondAbility, setSecondAbility] = React.useState<string>("");
  const [secondOption, setSecondOption] = React.useState<any>("");
  const [secondValue, setSecondValue] = React.useState<any>("");
  const [thirdAbility, setThirdAbility] = React.useState<string>("");
  const [thirdOption, setThirdOption] = React.useState<any>("");
  const [thirdValue, setThirdValue] = React.useState<any>("");

  React.useEffect(() => {
    // 첫번째 줄 어빌리티
    setFirstValue("");
    if (firstAbility.includes("재사용")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "reset_Legendary";
      setFirstOption(FilteringOptions.numbers[selectedCategory]);
    } else if (firstAbility.includes("버프")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "buffMaintain_Legendary";
      setFirstOption(FilteringOptions.numbers[selectedCategory]);
    } else {
      setFirstOption([]);
    }
  }, [firstAbility]);

  React.useEffect(() => {
    // 두번째 줄 어빌리티
    setSecondValue("");
    if (secondAbility.includes("재사용")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "reset_Unique";
      setSecondOption(FilteringOptions.numbers[selectedCategory]);
    } else if (secondAbility.includes("버프")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "buffMaintain_Unique";
      setSecondOption(FilteringOptions.numbers[selectedCategory]);
    } else if (secondAbility.includes("상태")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "debuffBonusDamage";
      setSecondOption(FilteringOptions.numbers[selectedCategory]);
    } else {
      setSecondOption([]);
    }
  }, [secondAbility]);

  React.useEffect(() => {
    // 세번째 줄 어빌리티
    setThirdValue("");
    if (thirdAbility.includes("재사용")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "reset_Unique";
      setThirdOption(FilteringOptions.numbers[selectedCategory]);
    } else if (thirdAbility.includes("버프")) {
      const selectedCategory: keyof typeof FilteringOptions.numbers =
        "buffMaintain_Unique";
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
          <StyledStatContainer>11</StyledStatContainer>
          <StyledStatDetail>
            <div>
              <StyledDetailTitle>상세스탯</StyledDetailTitle>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>메용 O 스텟</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>메용 X 스텟</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>부스텟 1</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>부스텟 2</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <InputStatContainer>
                <StyledStatTitle>스탯 공격력</StyledStatTitle>
                <StyledStatContainer>
                  <InputStat></InputStat>
                  <InputStat></InputStat>
                </StyledStatContainer>
              </InputStatContainer>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>데미지</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>보스 데미지</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>최종 데미지</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>버프 지속시간</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>방어율 무시</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>아이템 드롭률</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>크리티컬확률</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>메소 획득량</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>크리 데미지</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>공격 속도</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>공격력</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>마력</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <OtherContainerBox>
                <OtherContainer>
                  <StyledSamllTitle>공격력%</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
                <OtherContainer>
                  <StyledSamllTitle>마력%</StyledSamllTitle>
                  <InputSmallBox></InputSmallBox>
                </OtherContainer>
              </OtherContainerBox>
              <StyledAbilityTitle>
                <span>어빌리티</span>
                {/* <button
                  onClick={() => {
                    setFirstAbility("");
                    setFirstOption("");
                    setSecondAbility("");
                    setSecondOption("");
                    setThirdAbility("");
                    setThirdOption("");
                  }}
                  style={{ borderRadius: "1rem" }}
                >
                  초기화
                </button> */}
              </StyledAbilityTitle>
              <div>출력테스트</div>
              <div>
                {firstAbility} : {firstValue}
              </div>
              <div>
                {secondAbility} : {secondValue}
              </div>
              <div>
                {thirdAbility} : {thirdValue}
              </div>
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
                  {(firstAbility.includes("재사용") ||
                    firstAbility.includes("상태") ||
                    firstAbility.includes("버프")) && (
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
                    secondAbility.includes("상태") ||
                    secondAbility.includes("버프")) && (
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
                    thirdAbility.includes("상태") ||
                    thirdAbility.includes("버프")) && (
                    <SelectValue
                      options={thirdOption}
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
        </StyledDiv>
        <ReturnLink to="/"> ◀️ 돌아가기</ReturnLink>
      </StyledContainer>
    </div>
  );
}

export default InputPage;

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
  font-size: 1.6rem;
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

const StyledSamllTitle = styled.div`
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
  font-size: 1.7rem;
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
