import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './component/Header';
import { dummySrc } from './static/dummys';
import { RootComponent } from './component/RootComponent';

export const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SubContainer = styled.div`
  width: 40%;
  height: 20rem;
  border: 2px solid #a4a4a4;
  border-radius: 10px;
  margin: 2rem auto;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 900;
  float: left;
  margin: 10px;
`;

function App() {
  const [menuIndex, setMenuIndex] = useState(0);
  const handleMenus = (e, idx) => {
    console.log(idx);
    setMenuIndex(idx);
  };
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <div className="left-component-list-side">
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
          <WholeContainer>
            <SubContainer>
              <Title>{dummySrc.menus[menuIndex]}</Title>
              <RootComponent idx={menuIndex} />
            </SubContainer>
          </WholeContainer>
        </div>
      </div>
    </>
  );
}

export default App;
