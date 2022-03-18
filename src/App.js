import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from './component/Header';
import { AutoComplete } from './component/AutoComplete';
import { ClickToEdit } from './component/ClickToEdit';
import { Modal } from './component/Modal';
import { Tab } from './component/Tab';
import { Tag } from './component/Tag';
import { Toggle } from './component/Toggle';
import { CarouselIdx } from './component/CarouselIdx';
import { CarouselSlider } from './component/CarouselSlider';
import { dummySrc } from './static/dummys';

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
  const [menu, setMenu] = useState(0);
  const handleMenus = (e, idx) => {
    setMenu(idx);
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
                  onClick={() => {}}
                  onKeyPress={(e) => handleMenus(e, idx)}
                >
                  {menu}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right-current-side">
          <WholeContainer>
            {dummySrc.menus.map((menu) => {
              return (
                <SubContainer>
                  <Title>{menu}</Title>
                  <Toggle />
                </SubContainer>
              );
            })}
          </WholeContainer>
        </div>
      </div>
    </>
  );
}

export default App;
