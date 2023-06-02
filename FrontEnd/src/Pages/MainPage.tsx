import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <>
      <MainContainer>
        <MainBody>
          <div>
            <InputPageButton to="/input">직접 입력하기</InputPageButton>
            <InputPageButton to="/image">이미지 인식하기</InputPageButton>
          </div>
        </MainBody>
      </MainContainer>
    </>
  );
}

export default MainPage;

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

const MainBody = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70rem;
  height: 70rem;
  background-color: rgba(255, 255, 255);
  z-index: 501;
`;

const InputPageButton = styled(Link)`
  display: flex;
  font-size: 3rem;
  margin: 3rem 2rem;
  padding: 1rem 1rem;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 10rem;
  background-color: skyblue;
`;
