import React, { useState } from 'react';
import styled from 'styled-components';
import { BiChevronRightCircle } from 'react-icons/bi';
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
          <Title>{dummySrc.menus[menuIndex]}</Title>
          <Docs>
            <BiChevronRightCircle size="1.8rem" />
            <Desc>{dummySrc.docs[menuIndex]}</Desc>
          </Docs>

          <SubContainer>
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
  width: 40%;
  height: 20rem;
  border: 2px solid #a4a4a4;
  border-radius: 10px;
  margin: 3rem auto;
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
