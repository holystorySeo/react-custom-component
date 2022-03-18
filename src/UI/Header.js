import React from 'react';
import styled from 'styled-components';

export function Header() {
  return (
    <HeaderWrap>
      <h1>React custom component</h1>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  border-bottom: 1px solid black;

  > h1 {
    color: coral;
    text-align: center;
  }
`;
