import { useState } from 'react';
import styled from 'styled-components';

export const ToggleContainer = styled.div`
  position: relative;
  margin-top: 8rem;
  left: 47%;

  >.toggle-container {
    position: relative;
    width: 60px;
    height: 24px;
    border-radius: 30px;
    background-color: #8b8b8b;
    transition: all ease .2s 0s;
    cursor: pointer;
  }

  >.toggle-container2 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 0px;
    height: 24px;
    border-radius: 30px;
    transition: all ease .3s 0s;

    &.toggle--checked {
      width: 60px;
      transition: all ease .3s 0s;
      background-color: #8000FF;
    }
  }

  >.toggle-circle {
    position: absolute;
    top: 3px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all ease .3s 0s;
    cursor: pointer;

    &.toggle--checked {
      transition: all ease .3s 0s;
      left: 38px;
    }
  }

  >.desc {
    margin-top: 10px;
    margin-left: -40px;
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
        <div className='toggle-container' onClick={toggleHandler} />
        <div className={`toggle-container2 ${isToggleOn ? 'toggle--checked' : ''}`} onClick={toggleHandler} />
        <div className={`toggle-circle ${isToggleOn ? 'toggle--checked' : ''}`}onClick={toggleHandler} />
        <div className='desc' onClick={toggleHandler}>{isToggleOn ? 'Toggle Switch ON' : 'Toggle Switch OFF'}</div> 
      </ToggleContainer>
    </>
  )
}
