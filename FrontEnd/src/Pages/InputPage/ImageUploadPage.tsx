import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ImageUploadPage() {
  return (
    <StyledContainer>
      <StyledDiv>지원 준비중입니다.</StyledDiv>
      <ReturnLink to="/"> ◀️ 돌아가기</ReturnLink>
    </StyledContainer>
  );
}

export default ImageUploadPage;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70rem;
  font-size: 3rem;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReturnLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
