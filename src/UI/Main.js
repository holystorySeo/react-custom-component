/* 
  React custom component v1.0
  - Toggle 스위치 on.off 컴포넌트
  - 작성자: holystorySeo(https://github.com/holystorySeo)
  - 마지막 업데이트: 2022.04.08
*/

import React, { useState } from 'react';
import styled from 'styled-components';
import { BiChevronRightCircle } from 'react-icons/bi';
import { dummySrc } from '../static/dummys';
import { RootComponent } from '../component/RootComponent';

export function Main() {
  const [menuIndex, setMenuIndex] = useState(0);
  const [subContainerBorder, setSubContainerBorder] = useState(false);

  const handleMenus = (e, idx) => {
    setMenuIndex(idx);
  };

  const handleSubContainerBorder = () => {
    setSubContainerBorder(!subContainerBorder);
  };

  const initailizeSubContainerBorder = () => {
    setSubContainerBorder(false);
  };

  return (
    <MainContainer>
      <div className="component-list-side">
        <ul>
          {dummySrc.menus.map((menu, idx) => {
            return (
              <li
                role="presentation"
                id={idx}
                key={idx}
                onClick={(e) => {
                  handleMenus(e, idx);
                  initailizeSubContainerBorder();
                }}
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right-current-side">
        <RightSideWrap>
          <Title>{dummySrc.menus[menuIndex]}</Title>
          <Docs>
            <BiChevronRightCircle size="1.8rem" />
            <Desc>{dummySrc.docs[menuIndex]}</Desc>
          </Docs>
          <SubContainer
            className={`${subContainerBorder ? 'border--changed' : ''}`}
          >
            <RootComponent
              idx={menuIndex}
              handleSubContainerBorder={handleSubContainerBorder}
            />
          </SubContainer>
        </RightSideWrap>
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;

  > .component-list-side {
    flex: 1 0 0;
    border-right: 1px solid whitesmoke;
    overflow-x: hidden;
    overflow-y: scroll;
    cursor: pointer;

    > ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        min-width: 100%;
        min-height: 3rem;
        border-bottom: 1px solid whitesmoke;
        line-height: 3rem;
        padding-left: 1rem;
        font-size: 1.3rem;
        margin-left: 1rem;
      }
    }
  }

  > .right-current-side {
    flex: 4 0 0;
  }
`;

const RightSideWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 30rem;
  border: 20px solid #a4a4a4;
  border-radius: 10px;
  margin: 3rem auto;

  &.border--changed {
    border: 20px solid coral;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  float: left;
  margin: 15px 15px;
`;

const Docs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
`;

const Desc = styled.span`
  margin: 13px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
`;
