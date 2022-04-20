/* 
  React custom component v1.0
  - 모바일 화면 좌측 상단 메뉴 버튼 클릭시 출현하는 컴포넌트 리스트 메뉴바
  - 작성자: holystorySeo(https://github.com/holystorySeo)
  - 마지막 업데이트: 2022.04.08
*/

import React from 'react';
import styled, { css } from 'styled-components';
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
              className={`menu_list-${idx + 1}`}
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

function createCSS() {
  let styles = '';

  for (let i = 1; i < dummySrc.menus.length; i += 1) {
    styles += `
      .menu_list-${i} {
        transform-origin: top center;
        animation: slideDown 300ms ${i * 60}ms ease-in-out forwards;
        font-size: 0.8rem;
        font-weight: 600;
        line-height: 2rem;
        color: white;
        cursor: pointer;
        padding-left: 10px;
        background: #585858;
        &:hover {
          background: #fe9a2e;
          border-radius: 5px;
        }
      }
    `;
  }
  return css`
    ${styles}
  `;
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

    ${createCSS()};

    @keyframes slideDown {
      0% {
        opacity: 0;
        transform: translateY(-60px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (min-width: 600px) {
      display: none;
    }
  }
`;
