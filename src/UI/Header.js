import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

export function Header() {
  return (
    <HeaderWrap>
      <span>
        <FaReact className="FaReact--display" size="1.5rem" color="coral" />
        <AiOutlineMenu
          className="AiOutlineMenu--display"
          size="1.5rem"
          color="coral"
        />
      </span>
      <h2>React custom component</h2>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  height: 10%;
  border-bottom: 5px solid whitesmoke;

  > span {
    margin-right: 0.5rem;
    padding: 3px;
    border: 1px solid coral;
    border-radius: 5px;
  }

  > h2 {
    color: coral;
  }

  .FaReact--display {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .AiOutlineMenu--display {
    @media (min-width: 601px) {
      display: none;
    }
  }
`;
