/* 
  React custom component v1.0
  - 모바일 화면 좌측 상단 메뉴 버튼 클릭시 출현하는 컴포넌트 리스트 메뉴바
  - 작성자: holystorySeo(https://github.com/holystorySeo)
  - 마지막 업데이트: 2022.04.08
*/

import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { dummySrc } from '../static/dummys';
import { updateIdx } from '../store/globalSlice';

export function MenuBar() {
  const disptach = useDispatch();

  const handleMenuBar = (idx) => {
    disptach(updateIdx(idx));
  };

  return (
    <MenuBarContainer>
      <ul>
        {dummySrc.menus.map((menu, idx) => {
          return (
            <li
              role="presentation"
              key={idx}
              onClick={() => handleMenuBar(idx)}
            >
              {menu}
            </li>
          );
        })}
      </ul>
    </MenuBarContainer>
  );
}

const MenuBarContainer = styled.div`
  position: absolute;
  top: 60px;
  width: 130px;
  height: 200px;
  background: #585858;
  border-radius: 10px;
  padding: 5px 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  > ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 2rem;
      color: white;
      cursor: pointer;
      padding-left: 10px;

      &:hover {
        background: #fe9a2e;
        border-radius: 5px;
      }
    }
  }

  @media (min-width: 600px) {
    display: none;
  }
`;