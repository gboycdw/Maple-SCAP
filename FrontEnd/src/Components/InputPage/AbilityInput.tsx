import React from "react";
import styled from "styled-components";
import DropDown from "../Common/DropDown";
import FilteringOptions from "../Common/FilteringOptions";

function Ability(props: any) {
  const {
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

  // 첫번째 줄 어빌리티
  React.useEffect(() => {
    setFirstValue("");
    if (firstAbility.includes("재사용")) {
      setFirstOption(FilteringOptions.numbers.reset_Legendary);
    } else {
      setFirstOption([]);
    }
  }, [firstAbility]);

  // 두번째 줄 어빌리티
  React.useEffect(() => {
    setSecondValue("");
    if (secondAbility.includes("재사용")) {
      setSecondOption(FilteringOptions.numbers.reset_Unique);
    } else if (secondAbility.includes("상태")) {
      setSecondOption(FilteringOptions.numbers.debuffBonusDamage);
    } else {
      setSecondOption([]);
    }
  }, [secondAbility]);

  // 세번째 줄 어빌리티
  React.useEffect(() => {
    setThirdValue("");
    if (thirdAbility.includes("재사용")) {
      setThirdOption(FilteringOptions.numbers.reset_Unique);
    } else if (thirdAbility.includes("상태")) {
      setThirdOption(FilteringOptions.numbers.debuffBonusDamage);
    } else {
      setThirdOption([]);
    }
  }, [thirdAbility]);

  return (
    <>
      <StyledAbilityTitle>
        <span>어빌리티</span>
      </StyledAbilityTitle>
      <div style={{ margin: "1rem 0rem" }}>
        <div style={{ display: "flex" }}>
          <DropDown
            list={FilteringOptions.options.first.filter(
              (data: string) => data !== secondAbility && data !== thirdAbility
            )}
            selected={firstAbility}
            setSelected={setFirstAbility}
            style={{ width: "37rem" }}
          />
          {firstAbility.includes("재사용") && (
            <DropDown
              list={firstOption}
              selected={firstValue}
              setSelected={setFirstValue}
              style={{ width: "11rem" }}
            />
          )}
        </div>
        <div style={{ display: "flex" }}>
          <DropDown
            list={FilteringOptions.options.second.filter(
              (data: string) => data !== firstAbility && data !== thirdAbility
            )}
            selected={secondAbility}
            setSelected={setSecondAbility}
            style={{ width: "37rem" }}
          />
          {(secondAbility.includes("재사용") ||
            secondAbility.includes("상태")) && (
            <DropDown
              list={secondOption}
              selected={secondValue}
              setSelected={setSecondValue}
              style={{ width: "11rem" }}
            />
          )}
        </div>
        <div style={{ display: "flex" }}>
          <DropDown
            list={FilteringOptions.options.third.filter(
              (data: string) => data !== secondAbility && data !== firstAbility
            )}
            selected={thirdAbility}
            setSelected={setThirdAbility}
            style={{ width: "37rem" }}
          />
          {(thirdAbility.includes("재사용") ||
            thirdAbility.includes("상태")) && (
            <DropDown
              list={thirdOption}
              selected={thirdValue}
              setSelected={setThirdValue}
              style={{ width: "11rem" }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Ability;

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
