import { useState } from 'react';
import styled from 'styled-components';

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
    background-color: #8b8b8b;
    transition: all ease .3s 0s;
    cursor: pointer;
    &.toggle--checked {
      background-color: #8000FF;
    }

    >.toggle-circle {
      position: absolute;
      top: 3px;
      left: 5px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #ffffff;
      transition: all ease .3s 0s;
      cursor: pointer;
      &.toggle--checked {
        left: 37px;
      }
    }
  }

  >.desc {
    margin-top: 10px;
  }
`;

export const Toggle = () => {
  const [ isToggleOn, setIsToggleOn ] = useState(false);

  const toggleHandler = () => {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <>
      <ToggleContainer>
        <div className={`toggle-container ${isToggleOn ? 'toggle--checked' : ''}`} onClick={toggleHandler}>
          <div className={`toggle-circle ${isToggleOn ? 'toggle--checked' : ''}`} onClick={toggleHandler} />
        </div>
        <div className='desc' onClick={toggleHandler}>{isToggleOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</div> 
      </ToggleContainer>
    </>
  )
}
