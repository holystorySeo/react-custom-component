import React, { useState } from 'react';
import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  height: 17%;
  background-color: #d8d8d8;
  padding-left: 50px;
  margin-top: 10px;

  > .submenu {
    width: 100%;
    display: flex;
    align-items: center;
    color: #848484;
    font-weight: 700;
    cursor: pointer;
    padding-left: 10px;

    &.submenu--focused {
      background-color: coral;
      color: white;
    }
  }
`;

export const Desc = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  font-size: 20px;
  font-weight: 500;
`;

export function Tab() {
  const menuArr = [
    { tabMenu: 'Tab menu ONE', content: 'Tab1' },
    { tabMenu: 'Tab menu TWO', content: 'Tab2' },
    { tabMenu: 'Tab menu THREE', content: 'Tab3' },
  ];

  const [isTabSelected, setIsTabSelected] = useState(0);

  const tabHandler = (id) => {
    setIsTabSelected(id);
  };

  return (
    <>
      <TabContainer>
        {menuArr.map((el, idx) => {
          return (
            <div
              role="presentation"
              key={idx}
              className={`submenu ${
                isTabSelected === idx ? 'submenu--focused' : ''
              }`}
              onClick={() => tabHandler(idx)}
            >
              {el.content}
            </div>
          );
        })}
      </TabContainer>
      <Desc>{menuArr[isTabSelected].tabMenu}</Desc>
    </>
  );
}
