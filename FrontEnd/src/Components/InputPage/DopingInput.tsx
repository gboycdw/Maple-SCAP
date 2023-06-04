import React from "react";
import styled from "styled-components";

function DopingInput(props: any) {
  const {
    setNoblessBoss,
    setNoblessDmg,
    setNoblessCriDmg,
    setNoblessIgnore,
    setHerosHawl,
    setDopingShiningRed,
    setDopingBigHero,
    setDopingSuperPower,
    setDopingExtreme,
    setDopingGuildBlessing,
    setDopingUnionsPower,
    setDopingUrus,
    setDopingFish,
    setDopingStatPotion,
    setDopingLegendHero,
    setDopingJangBi,
    setDopingRebootAtkPotion,
    setDopingDragonsMeal,
    noblessBoss,
    noblessDmg,
    noblessCriDmg,
    noblessIgnore,
    herosHawl,
    setNoblessBossValue,
    setNoblessDmgValue,
    setNoblessCriDmgValue,
    setNoblessIgnoreValue,
    dopingShiningRed,
    dopingSuperPower,
    dopingExtreme,
    dopingGuildBlessing,
    dopingUnionsPower,
    dopingUrus,
    dopingBigHero,
    dopingLegendHero,
    dopingJangBi,
    dopingFish,
    dopingRebootAtkPotion,
    dopingDragonsMeal,
    dopingStatPotion,
    setDopingStatPotionValue,
  } = props;

  return (
    <StyledStatDetail style={{ width: "46.5rem" }}>
      <div>
        <StyledDopingTitle style={{ width: "44.4rem" }}>
          도핑정보
        </StyledDopingTitle>
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
                setDopingRebootAtkPotion(false);
                setDopingDragonsMeal(false);
                setDopingStatPotion(false);
              }}
            >
              전체해제
            </DopingSelectButton>
          </OtherContainer>
        </OtherContainerBox>
        <OtherContainerBox>
          <OtherContainer
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "-0.7rem",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center" }}>
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
                  <SelectedImg src="./images/noblessboss.png" alt="노블보공" />
                )}
              </StyledBuffButton>
              <InputDopingBox
                // type="number"
                style={{ width: "35px" }}
                min={0}
                max={15}
                placeholder="~15"
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
            </div>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
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
                  <SelectedImg src="./images/noblessdam.png" alt="노블뎀지" />
                )}
              </StyledBuffButton>
              <InputDopingBox
                // type="number"
                style={{ width: "35px" }}
                min={0}
                max={15}
                placeholder="~15"
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
            </div>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
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
                // type="number"
                style={{ width: "35px" }}
                min={0}
                max={15}
                placeholder="~15"
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
            </div>
            <div style={{ display: "inline-flex", alignItems: "center" }}>
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
                // type="number"
                style={{ width: "35px" }}
                min={0}
                max={15}
                placeholder="~15"
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
            </div>
          </OtherContainer>
        </OtherContainerBox>
        <OtherContainerBox>
          <OtherContainer
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "-0.4rem",
            }}
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
                <NonSelectedImg src="./images/shiningred_no.png" alt="반빨별" />
              ) : (
                <SelectedImg src="./images/shiningred.png" alt="반빨별" />
              )}
            </StyledBuffButton>
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
                <SelectedImg src="./images/superpower.png" alt="슈퍼파워" />
              )}
            </StyledBuffButton>
            <StyledBuffButton
              onClick={() => {
                setDopingExtreme(!dopingExtreme);
              }}
            >
              {!dopingExtreme ? (
                <NonSelectedImg src="./images/extreme_no.png" alt="익스물약" />
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
          </OtherContainer>
        </OtherContainerBox>
        {/* 2비약 종류를 선택하는 공간 */}
        <OtherContainerBox
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div style={{ border: "1px solid #ccc", borderRadius: "12px" }}>
            <StyledBuffButton
              onClick={() => {
                setDopingBigHero(!dopingBigHero);
                setDopingLegendHero(false);
                setDopingJangBi(false);
              }}
            >
              {!dopingBigHero ? (
                <NonSelectedImg src="./images/bighero_no.png" alt="2비약" />
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
                <NonSelectedImg src="./images/legendhero_no.png" alt="2비약" />
              ) : (
                <SelectedImg src="./images/legendhero.png" alt="2비약" />
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
                <NonSelectedImg src="./images/jangbi_no.png" alt="2비약" />
              ) : (
                <SelectedImg src="./images/jangbi.png" alt="2비약" />
              )}
            </StyledBuffButton>
          </div>
          {/* 뿌리기 종류를 선택하는 공간 */}
          <div style={{ border: "1px solid #ccc", borderRadius: "12px" }}>
            <StyledBuffButton
              onClick={() => {
                setDopingFish(!dopingFish);
                setDopingRebootAtkPotion(false);
                setDopingDragonsMeal(false);
              }}
            >
              {!dopingFish ? (
                <NonSelectedImg src="./images/fish_no.png" alt="붕뿌X" />
              ) : (
                <SelectedImg src="./images/fish.png" alt="붕뿌O" />
              )}
            </StyledBuffButton>
            <StyledBuffButton
              onClick={() => {
                setDopingFish(false);
                setDopingRebootAtkPotion(!dopingRebootAtkPotion);
                setDopingDragonsMeal(false);
              }}
            >
              {!dopingRebootAtkPotion ? (
                <NonSelectedImg
                  src="./images/reboot_atkpotion_no.png"
                  alt="5단계공격력X"
                />
              ) : (
                <SelectedImg
                  src="./images/reboot_atkpotion.png"
                  alt="5단계공격력O"
                />
              )}
            </StyledBuffButton>
            <StyledBuffButton
              onClick={() => {
                setDopingFish(false);
                setDopingRebootAtkPotion(false);
                setDopingDragonsMeal(!dopingDragonsMeal);
              }}
            >
              {!dopingDragonsMeal ? (
                <NonSelectedImg
                  src="./images/dragonsmeal_no.png"
                  alt="이유식X"
                />
              ) : (
                <SelectedImg src="./images/dragonsmeal.png" alt="이유식O" />
              )}
            </StyledBuffButton>
          </div>
        </OtherContainerBox>

        <OtherContainerBox>
          <OtherContainer>
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
                <SelectedImg src="./images/statpotion.png" alt="주스텟물약" />
              )}
            </StyledBuffButton>
            <InputDopingBox
              // type="number"
              style={{ width: "35px" }}
              min={0}
              max={30}
              placeholder="~30"
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
  );
}

export default DopingInput;

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

// 버프 사용 버튼
const StyledBuffButton = styled.button`
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

// 도핑 선택 타이틀
const StyledDopingTitle = styled.div`
  background: linear-gradient(to top, rgb(222, 223, 163), rgb(219, 188, 10));
  color: white;
  text-shadow: -1px -1px 0 rgb(228, 211, 59), 1px -1px 0 rgb(228, 211, 59),
    -1px 1px 0 rgb(228, 211, 59), 1px 1px 0 rgb(228, 211, 59);
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  padding-left: 1rem;
  margin-bottom: 0.8rem;
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
