import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal(props: ModalProps) {
  const { setShowModal } = props;
  const navigate = useNavigate();
  return (
    <>
      <ModalContainer>
        <ModalPage>
          <button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
            onClick={() => {
              setShowModal(false);
            }}
          >
            X
          </button>
          <DetailPage>
            <ClassContainer> Lv.275 아델 </ClassContainer>
            <DmgContainer>
              <DmgDiv>
                <DmgText>보정 한줄뎀 </DmgText>
                <DmgText style={{ fontSize: "14px" }}>
                  (아델 기준스킬 : 샤드)
                </DmgText>
              </DmgDiv>
              <Dmg>18억 9727만</Dmg>
            </DmgContainer>
            <StatContainer>
              <StatDiv>
                <Stat>무릉</Stat>
                <Stat>81237</Stat>
              </StatDiv>
              <StatDiv>
                <Stat>보스(300)</Stat>
                <Stat>80901</Stat>
              </StatDiv>
              <StatDiv>
                <Stat>보스(380)</Stat>
                <Stat>80890</Stat>
              </StatDiv>
            </StatContainer>
            <ButtonContainer>
              <StyledButton
                onClick={() => {
                  navigate("/result");
                }}
              >
                상세조회
              </StyledButton>
              <StyledButton
                onClick={() => {
                  setShowModal(false);
                }}
              >
                다시입력
              </StyledButton>
            </ButtonContainer>
            <VersionBox> 환산 주스탯(KMS 1.2.379)</VersionBox>
          </DetailPage>
        </ModalPage>
      </ModalContainer>
    </>
  );
}

export default Modal;

// 모달 속성 부분
const ModalContainer = styled.div`
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

const ModalPage = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60rem;
  width: 85rem;
  height: 42rem;
  background-color: rgba(255, 255, 255);
  z-index: 501;
`;

const DetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: beige; */
  width: 90%;
  font-size: 2.3rem;
  z-index: 900;
`;

// 상단 바
const ClassContainer = styled.div`
  font-size: 31px;
  text-align: center;
`;

// 줄뎀 부분
const DmgContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2.5rem 1rem 1rem 1rem;
  padding: 1px;
  font-size: 20px;

  /* background-color: grey; */
`;
const DmgDiv = styled.div`
  display: grid;
  width: 24rem;
  justify-content: center;
  align-items: center;
  /* background-color: skyblue; */
`;

const Dmg = styled.div`
  grid-column: 2;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  /* background-color: beige; */
`;

const DmgText = styled.div`
  text-align: center;
`;

// 환산주스탯 부분
const StatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  margin: 1rem;
`;

const StatDiv = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  /* background-color: beige; */
  font-size: 28px;
`;

const Stat = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  /* background-color: skyblue; */
`;

// 버튼 부분
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  margin: 5px 20px 0px 20px;
  width: 11rem;
  height: 4rem;
  border-radius: 10px;
  /* width: fit-content; */
  /* justify-content: center; */
`;

// 하단 버전부분
const VersionBox = styled.div`
  margin-top: 12px;
  /* background-color: aquamarine; */
  text-align: end;
`;
