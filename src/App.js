import React from 'react';
import styled from 'styled-components';
import { Header } from './UI/Header';
import { Main } from './UI/Main';

function App() {
  return (
    <WholeContainer>
      <Header />
      <Main />
    </WholeContainer>
  );
}

export default App;

const WholeContainer = styled.div`
  height: 100vh;
`;
