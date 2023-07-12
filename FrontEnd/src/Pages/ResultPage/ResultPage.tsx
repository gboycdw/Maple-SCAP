import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function ResultPage() {
  const navigate = useNavigate();
  return (
    <>
      <ReturnButton
        onClick={() => {
          navigate("/input");
        }}
      >
        다시 입력하기
      </ReturnButton>
      <StyledContainer>
        <StyledDiv>ㄱㅁㅇ</StyledDiv>
      </StyledContainer>
    </>
  );
}

export default ResultPage;

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

const ReturnButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px;
  width: 100px;
  height: 50px;
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
