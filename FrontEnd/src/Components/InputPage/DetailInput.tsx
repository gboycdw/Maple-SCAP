import React from "react";
import styled from "styled-components";
import FilteringOptions from "../../Pages/FilteringOptions";
import Ability from "./AbilityInput";
import DropDown from "../Common/DropDown";

function DetailInput(props: any) {
  const {
    setHigherAtk,
    setLowerAtk,
    setDmg,
    setBossDmg,
    setBuffDuration,
    setIgnoreDef,
    setCriticalDmg,
    setCritical,
    setWeaponAtk,
    setAtkPercent,
    setMagicianLink,
    setThiefLink,
    setKadenaLink,
    setIlliumLink,
    setArkLink,
    setKainLink,
    setMercedesUnion,
    setWildhunterUnion,
    secondAbility,
    thirdAbility,
    firstAbility,
    setFirstAbility,
    firstOption,
    firstValue,
    setFirstValue,
    setSecondAbility,
    secondOption,
    secondValue,
    setSecondValue,
    setThirdAbility,
    thirdOption,
    thirdValue,
    setThirdValue,
    setFirstOption,
    setSecondOption,
    setThirdOption,
  } = props;

  return (
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

        {/* 어빌리티 */}
        <Ability
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
      </div>
    </StyledStatDetail>
  );
}
export default DetailInput;

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
