/* 
  React custom component v1.0
  - Toggle 스위치 on.off 컴포넌트
  - 작성자: holystorySeo(https://github.com/holystorySeo)
  - 마지막 업데이트: 2022.04.08
*/

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { BiChevronRightCircle } from 'react-icons/bi';
import { dummySrc } from '../static/dummys';
import { RootComponent } from '../component/RootComponent';
import { updateIdx } from '../store/globalSlice';

export function Main() {
  const menuIdx = useSelector((state) => state.global.menuIdx);
  const [subContainerBorder, setSubContainerBorder] = useState(false);

  // 메인 페이지 우측 사이드 메뉴(컴포넌트 리스트) 핸들러
  const disptach = useDispatch();
  const handleMenus = (idx) => {
    disptach(updateIdx(idx));
  };

  // Toggle, Modal 등의 버튼을 누르면 박스 테두리 색상 변경 핸들러
  const handleSubContainerBorder = () => {
    setSubContainerBorder(!subContainerBorder);
  };

  // 우측 사이드 메뉴를 변경할 때마다 박스 테두리 색상 회색으로 초기화 핸들러
  const initailizeSubContainerBorder = () => {
    setSubContainerBorder(false);
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
                onClick={() => {
                  handleMenus(idx);
                  initailizeSubContainerBorder();
                }}
              >
                {menu}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="right-current-side">
        <RightSideWrap>
          <Title>{dummySrc.menus[menuIdx]}</Title>
          <Docs>
            <BiChevronRightCircle size="1.8rem" />
            <Desc>{dummySrc.docs[menuIdx]}</Desc>
          </Docs>
          <SubContainer
            className={`${subContainerBorder ? 'border--changed' : ''}`}
          >
            <RootComponent
              idx={menuIdx}
              subContainerBorder={subContainerBorder}
              handleSubContainerBorder={handleSubContainerBorder}
            />
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

    @media (max-width: 600px) {
      flex: 0;
    }

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

        @media (max-width: 900px) {
          font-size: 1rem;
        }

        @media (max-width: 750px) {
          font-size: 0.7rem;
        }
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
  height: 100%;
`;

const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 60%;
  min-width: 300px;
  min-height: 100px;
  border: 20px solid #a4a4a4;
  border-radius: 10px;
  margin: 3rem auto;

  &.border--changed {
    border: 20px solid coral;
  }
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

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
