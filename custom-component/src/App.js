import React from 'react';
import styled from 'styled-components';
import { AutoComplete } from './component/AutoComplete';
import { ClickToEdit } from './component/ClickToEdit';
import { Modal } from './component/Modal';
import { Tab } from './component/Tab';
import { Tag } from './component/Tag';
import { Toggle } from './component/Toggle';

export const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const SubContainer = styled.div`
  width: 40%;
  height: 20rem;
  border: 2px solid #A4A4A4;
  border-radius: 10px;
  margin: 2rem auto;
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 900;
  float: left;
  margin: 10px;
`;

const App = () => {
  return (
    <>
      <WholeContainer>
        <SubContainer>
          <Title>Toggle</Title>
          <Toggle />
        </SubContainer>
        <SubContainer>
          <Title>Modal</Title>
          <Modal />
        </SubContainer>
        <SubContainer>
          <Title>Tab</Title>
          <Tab />
        </SubContainer>
        <SubContainer>
          <Title>Tag</Title>
          <Tag />
        </SubContainer>
        <SubContainer>
          <Title>AutoComplete</Title>
          <AutoComplete />
        </SubContainer>
        <SubContainer>
          <Title>ClickToEdit</Title>
          <ClickToEdit />
        </SubContainer>
      </WholeContainer>
    </>
  )
}

export default App;
