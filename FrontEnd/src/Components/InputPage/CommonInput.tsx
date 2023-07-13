import React from "react";
import styled from "styled-components";
import { SpecialState } from "../../Recoil/States/SpecialState";
import { StatState } from "../../Recoil/States/StatState";
import { useRecoilState, useSetRecoilState } from "recoil";

function CommonInput() {
  const [reboot, setReboot] = useRecoilState(SpecialState.rebootState);
  const [genesis, setGenesis] = useRecoilState(SpecialState.genesisState);
  const [combat, setCombat] = useRecoilState(SpecialState.combatState);
  const [mugongSoul, setMugongSoul] = useRecoilState(
    SpecialState.mugongSoulState
  );
  const [useRuinForceShild, setUseRuinForceShild] = useRecoilState(
    SpecialState.useRuinForceShildState
  );
  const [epiSoul, setEpiSoul] = useRecoilState(SpecialState.epiSoulState);
  const [oneHandSword, setOneHandSword] = useRecoilState(
    SpecialState.oneHandSwordState
  );

  // 스텟 입력 관리
  const [level, setLevel] = useRecoilState(StatState.levelState);
  const [myClass, setMyClass] = useRecoilState(StatState.myClassState);
  const [hp, setHp] = useRecoilState(StatState.hpState);
  const [str, setStr] = useRecoilState(StatState.strState);
  const [dex, setDex] = useRecoilState(StatState.dexState);
  const [int, setInt] = useRecoilState(StatState.intState);
  const [luk, setLuk] = useRecoilState(StatState.lukState);
  const [noYongsaStat, setNoYongsaStat] = useRecoilState(
    StatState.noYongsaStatState
  );
  const [simbolStat, setSimbolStat] = useRecoilState(StatState.simbolStatState);
  const [abilityStat, setAbilityStat] = useRecoilState(
    StatState.abilityStatState
  );
  const [unionStat, setUnionStat] = useRecoilState(StatState.unionStatState);
  const [hyperStat, setHyperStat] = useRecoilState(StatState.hyperStatState);

  return (
    <>
      <StyledStatDetail style={{ width: "fit-content" }}>
        <div>
          <OtherContainerBox>
            <OtherContainer
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div>
                <StyledBuffButton
                  onClick={() => {
                    setReboot(!reboot);
                  }}
                >
                  {!reboot ? (
                    <SelectedImg
                      src="./images/server_mainserver.png"
                      alt="본섭"
                      title="본섭"
                    />
                  ) : (
                    <SelectedImg
                      src="./images/server_reboot.png"
                      alt="리부트"
                      title="리부트"
                    />
                  )}
                </StyledBuffButton>
                <StyledBuffButton
                  onClick={() => {
                    setGenesis(!genesis);
                  }}
                >
                  {!genesis ? (
                    <SelectedImg
                      src="./images/item_genesis_no.png"
                      alt="노해방"
                      title="노해방"
                    />
                  ) : (
                    <SelectedImg
                      src="./images/item_genesis.png"
                      alt="해방"
                      title="해방"
                    />
                  )}
                </StyledBuffButton>
                <StyledBuffButton
                  onClick={() => {
                    setCombat(!combat);
                  }}
                >
                  {combat ? (
                    <SelectedImg
                      src="./images/skill_combat.png"
                      alt="컴뱃O"
                      title="컴뱃O"
                    />
                  ) : (
                    <SelectedImg
                      src="./images/skill_combat_no.png"
                      alt="컴뱃X"
                      title="컴뱃X"
                    />
                  )}
                </StyledBuffButton>
                <StyledBuffButton
                  onClick={() => {
                    if (parseInt(mugongSoul) <= 1) {
                      setMugongSoul(mugongSoul + 1);
                    } else if (parseInt(mugongSoul) === 2) {
                      setMugongSoul("");
                    }
                  }}
                >
                  {mugongSoul === "" ? (
                    <SelectedImg
                      src="./images/soul_mugong_no.png"
                      alt="무공소울X"
                      title="무공소울X"
                    />
                  ) : parseInt(mugongSoul) === 1 ? (
                    <SelectedImg
                      src="./images/soul_mugong.png"
                      alt="무공1렙"
                      title="무공소울 1레벨 사용"
                    />
                  ) : (
                    <SelectedImg
                      src="./images/soul_mugong2.png"
                      alt="무공2렙"
                      title="무공소울 2레벨 사용"
                    />
                  )}
                </StyledBuffButton>
              </div>
              <div>
                {myClass === "데몬슬레이어" || myClass === "데몬어벤져" ? (
                  <StyledBuffButton
                    onClick={() => {
                      setUseRuinForceShild(!useRuinForceShild);
                    }}
                  >
                    {!useRuinForceShild ? (
                      <SelectedImg
                        src="./images/item_ruin_no.png"
                        alt="루포실X"
                        title="루포실X"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/item_ruin.png"
                        alt="루포실 사용"
                        title="루포실 사용"
                      />
                    )}
                  </StyledBuffButton>
                ) : (
                  <StyledBuffButton>
                    <SelectedImg
                      src="./images/blank.png"
                      alt="미사용"
                      title="미사용"
                    />
                  </StyledBuffButton>
                )}
                {myClass === "데몬어벤져" ? (
                  <StyledBuffButton
                    onClick={() => {
                      if (parseInt(epiSoul) <= 1) {
                        setEpiSoul((parseInt(epiSoul) + 1).toString());
                      } else if (parseInt(epiSoul) === 2) {
                        setEpiSoul("");
                      }
                    }}
                  >
                    {epiSoul === "" ? (
                      <SelectedImg
                        src="./images/soul_epi_no.png"
                        alt="에피X"
                        title="에피네아 소울 미사용"
                      />
                    ) : parseInt(epiSoul) === 1 ? (
                      <SelectedImg
                        src="./images/soul_epi.png"
                        alt="에피1렙"
                        title="에피소울 1레벨 사용"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/soul_epi2.png"
                        alt="에피2렙"
                        title="에피소울 2레벨 사용"
                      />
                    )}
                  </StyledBuffButton>
                ) : (
                  <StyledBuffButton>
                    <SelectedImg
                      src="./images/blank.png"
                      alt="미사용"
                      title="미사용"
                    />
                  </StyledBuffButton>
                )}
                {myClass === "히어로" || myClass === "팔라딘" ? (
                  <StyledBuffButton
                    onClick={() => {
                      setOneHandSword(!oneHandSword);
                    }}
                  >
                    {!oneHandSword ? (
                      <SelectedImg
                        src="./images/sword_twohand.png"
                        alt="두손검 사용"
                        title="두손검 사용"
                      />
                    ) : (
                      <SelectedImg
                        src="./images/sword_onehand.png"
                        alt="한손검 사용"
                        title="한손검 사용"
                      />
                    )}
                  </StyledBuffButton>
                ) : (
                  <StyledBuffButton>
                    <SelectedImg
                      src="./images/blank.png"
                      alt="미사용"
                      title="미사용"
                    />
                  </StyledBuffButton>
                )}
              </div>
            </OtherContainer>
          </OtherContainerBox>
          <OtherContainerBox>
            <OtherContainer>
              <StyledSmallTitle style={{ width: "13.44rem" }}>
                레벨
              </StyledSmallTitle>
              <InputStat
                type="string"
                placeholder="레벨"
                title="현재 레벨"
                defaultValue={level}
                onChange={(e) => {
                  setLevel(e.target.value);
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
                placeholder="직업"
                title="정확하게 입력 안 하면 인식 못함."
                defaultValue={myClass}
                onChange={(e) => {
                  setMyClass(e.target.value);
                }}
              />
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
                placeholder="총 HP 수치"
                title="데몬어벤져는 반드시 총 HP를 입력할 것"
                defaultValue={hp}
                onChange={(e) => {
                  setHp(e.target.value);
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
                placeholder="힘 수치"
                title="메용 포함 수치, 선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                defaultValue={str}
                onChange={(e) => {
                  setStr(e.target.value);
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
                placeholder="민첩 수치"
                title="메용 포함 수치, 선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                defaultValue={dex}
                onChange={(e) => {
                  setDex(e.target.value);
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
                placeholder="지능 수치"
                title="메용 포함 수치, 선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                defaultValue={int}
                onChange={(e) => {
                  setInt(e.target.value);
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
                placeholder="행운 수치"
                title="메용 포함 수치, 선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                defaultValue={luk}
                onChange={(e) => {
                  setLuk(e.target.value);
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
                placeholder="메이플 용사를 끈 상태의 주스텟"
                title="메용 off 주스텟, 선택한 컴뱃 적용 유무와 일치하는 지 확인할 것"
                defaultValue={noYongsaStat}
                onChange={(e) => {
                  setNoYongsaStat(e.target.value);
                }}
              />
            </OtherContainer>
          </OtherContainerBox>
          <OtherContainerBox>
            <OtherContainer>
              <StyledSmallTitle style={{ width: "13.44rem" }}>
                심볼 스텟 수치
              </StyledSmallTitle>
              <InputStat
                type="number"
                min={0}
                placeholder="아케인심볼 + 어센틱심볼로 증가한 주스텟"
                title="스텟 증가량만 합산하여 입력"
                defaultValue={simbolStat}
                onChange={(e) => {
                  setSimbolStat(e.target.value);
                }}
              />
            </OtherContainer>
          </OtherContainerBox>
          <OtherContainerBox>
            <OtherContainer>
              <StyledSmallTitle style={{ width: "13.44rem" }}>
                어빌리티 스텟
              </StyledSmallTitle>
              <InputStat
                type="number"
                min={1}
                placeholder="어빌리티로 증가한 주스텟"
                title="어빌리티로 오른 주스텟을 입력"
                defaultValue={abilityStat}
                onChange={(e) => {
                  setAbilityStat(e.target.value);
                }}
              />
            </OtherContainer>
          </OtherContainerBox>
          <OtherContainerBox>
            <OtherContainer>
              <StyledSmallTitle style={{ width: "13.44rem" }}>
                유니온 스텟
              </StyledSmallTitle>
              <InputStat
                type="number"
                min={1}
                placeholder="유니온 공격대 배치로 증가한 주스텟"
                title="유니온 배치로 증가한 주스텟 수치를 더해서 입력"
                defaultValue={unionStat}
                onChange={(e) => {
                  setUnionStat(e.target.value);
                }}
              />
            </OtherContainer>
          </OtherContainerBox>
          <OtherContainerBox>
            <OtherContainer>
              <StyledSmallTitle style={{ width: "13.44rem" }}>
                하이퍼스텟
              </StyledSmallTitle>
              <InputStat
                type="number"
                min={1}
                placeholder="하이퍼스탯으로 증가한 주스텟"
                title="하이퍼스텟을 찍어서 '증가한' 주스텟 입력"
                defaultValue={hyperStat}
                onChange={(e) => {
                  setHyperStat(e.target.value);
                }}
              />
            </OtherContainer>
          </OtherContainerBox>
        </div>
      </StyledStatDetail>
    </>
  );
}

export default CommonInput;

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

// 버프 사용 버튼
const StyledBuffButton = styled.button`
  background-color: #fff;
  margin: 1.8px;
  width: 40px;
  height: 40px;
  border-radius: 14px;
`;

const SelectedImg = styled.img`
  /* border: 1px solid red; */
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
`;
