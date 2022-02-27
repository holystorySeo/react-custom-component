import { useState } from "react";
import styled from "styled-components";

const mainColor = "coral"; // mainColor 변수 선언
const subColor = "#E6E6E6"; // subColor 변수 선언

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  
  >.toggle-container {
    position: relative;
    width: 60px;
    height: 24px;
    border-radius: 30px;
    // left에서 right으로 color 변화 subColor --> mainColor 50%이므로 절반이나 size 200%로 꽉참
    background: ${subColor};
    background-size: 200%;
    transition: 1s;
    cursor: pointer;
    &.toggle--checked {
      background: ${mainColor};
      background-size: 200%;
      transition: 1s;
    }

    >.toggle-circle { // toggle-container의 자식 요소
      position: absolute;
      top: 2px;
      left: 1px; // circle이 left 1px에서 시작한다.
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ffffff;
      transition: 1s;
      cursor: pointer;
      &.toggle--checked {
        left: 39px; // circle이 left 37px까지 이동한다.
        transition: 1s;
      }
    }
  }

  >.desc { // 'Toggle Switch ON/OFF' text
    margin-top: 10px;

    }
  }
`;

export const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const toggleHandler = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <>
      <ToggleContainer>
        <div
          className={`toggle-container ${isToggleOn ? "toggle--checked" : ""}`}
          onClick={toggleHandler}
        >
          <div
            className={`toggle-circle ${isToggleOn ? "toggle--checked" : ""}`}
            onClick={toggleHandler}
          />
        </div>
        <div className="desc" onClick={toggleHandler}>
          {isToggleOn ? "Toggle Switch ON" : "Toggle Switch OFF"}
        </div>
      </ToggleContainer>
    </>
  );
};
