import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function InputPage() {
  return (
    <StyledContainer>
      <StyledDiv>
        <StyledStatContainer>11</StyledStatContainer>
        <StyledStatDetail>
          <div>
            <div>상세스탯</div>
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
          </div>
        </StyledStatDetail>
      </StyledDiv>
      <ReturnLink to="/"> ◀️ 돌아가기</ReturnLink>
    </StyledContainer>
  );
}

export default InputPage;

const ReturnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70rem;
  font-size: 1.6rem;
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
  background-color: rgb(223, 223, 223);
  border-radius: 1rem 0 0 1rem;
  float: left;
  justify-content: center;
  align-items: center;
  height: 7rem;
  width: 10rem;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
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
  background-color: rgb(223, 223, 223);
  border-radius: 1rem 0 0 1rem;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 10rem;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const InputSmallBox = styled.input`
  display: flex;
  width: 57%;
`;
