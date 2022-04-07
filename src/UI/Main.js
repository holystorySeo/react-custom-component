import React, { useState } from 'react';
import styled from 'styled-components';
import { dummySrc } from '../static/dummys';
import { RootComponent } from '../component/RootComponent';

export function Main() {
  const [menuIndex, setMenuIndex] = useState(0);
  const handleMenus = (e, idx) => {
    setMenuIndex(idx);
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
                onClick={(e) => handleMenus(e, idx)}
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right-current-side">
        <RightSideWrap>
          <SubContainer>
            <Title>{dummySrc.menus[menuIndex]}</Title>
            <RootComponent idx={menuIndex} />
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
    border-right: 1px solid black;
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
  width: 40%;
  height: 20rem;
  border: 2px solid #a4a4a4;
  border-radius: 10px;
  margin: 2rem auto;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 900;
  float: left;
  margin: 10px;
`;
