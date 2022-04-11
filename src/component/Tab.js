/* 
  React custom component v1.0
  - Tab 선택 컴포넌트 (feat. 코드 실행 결과 문제 풀기)
  - 작성자: holystorySeo(https://github.com/holystorySeo)
  - 마지막 업데이트: 2022.04.11
*/

import React, { useState } from 'react';
import styled from 'styled-components';
import { dummySrc } from '../static/dummys';

export function Tab() {
  const menuArr = ['Tab1', 'Tab2', 'Tab3'];

  const [isTabSelected, setIsTabSelected] = useState(0);
  const [checkedValue, setCheckedValue] = useState('');
  const [answerOpen, setAnswerOpen] = useState(false);

  const tabHandler = (id) => {
    setIsTabSelected(id);
  };

  const checkHandler = ({ target }) => {
    if (answerOpen) {
      setAnswerOpen(false);
    }

    if (checkedValue === target.value) {
      // 이미 클릭된 요소를 다시 클릭하면 checked 여부 false로 변경
      target.checked = false;
      setCheckedValue('');
    } else {
      // 클릭되지 않은 요소를 클릭하면 그 요소를 제외한 나머지는 checked false로 변경
      document.querySelectorAll(`input[type=checkbox]`).forEach((el) => {
        el.checked = false;
      });
      target.checked = true;
      setCheckedValue(target.value);
    }
  };

  const answerOpenHanlder = () => {
    setAnswerOpen(true);
  };

  return (
    <TabContainer>
      <TabSection>
        {menuArr.map((el, idx) => {
          return (
            <div
              role="presentation"
              key={idx}
              className={`submenu ${
                isTabSelected === idx ? 'submenu--focused' : ''
              }`}
              onClick={() => tabHandler(idx)}
            >
              {el}
            </div>
          );
        })}
      </TabSection>
      <Desc>
        <div className="question">{dummySrc.question[isTabSelected]}</div>
        <div className={`contents${isTabSelected}`} />
        <div className="optionSection">
          {dummySrc.options[isTabSelected].map((el, idx) => (
            <div className="options" key={idx}>
              <input
                name="option"
                type="checkbox"
                value={el}
                onClick={checkHandler}
              />
              <label htmlFor="options">{el}</label>
            </div>
          ))}
        </div>
        <button
          type="button"
          className={`answer-check ${checkedValue ? 'open' : ''}`}
          onClick={answerOpenHanlder}
        >
          정답 확인
        </button>
      </Desc>
      <AnswerSection>
        {answerOpen ? <Answer>{dummySrc.answer[isTabSelected]}</Answer> : ''}
      </AnswerSection>
    </TabContainer>
  );
}
const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TabSection = styled.div`
  display: flex;
  flex: 2 0 0;
  background-color: #d8d8d8;

  > .submenu {
    border-left: 2px solid #bdbdbd;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #848484;
    font-weight: 700;
    cursor: pointer;

    &.submenu--focused {
      background-color: coral;
      color: white;
    }
  }
`;

const Desc = styled.div`
  flex: 10 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  font-size: 15px;
  font-weight: 500;

  .question {
    padding: 10px;
    font-size: 14px;
  }

  .contents0 {
    width: 130px;
    height: 100px;
    background-position: -30px -24px;
    background-image: url('https://user-images.githubusercontent.com/87353284/162628899-dcdd39db-3363-48a1-b3de-2e850889ec97.jpeg');
    background-size: 500%;
  }

  .contents1 {
    width: 230px;
    height: 120px;
    background-position: -35px -195px;
    background-image: url('https://user-images.githubusercontent.com/87353284/162628899-dcdd39db-3363-48a1-b3de-2e850889ec97.jpeg');
    background-size: 300%;
  }

  .contents2 {
    width: 130px;
    height: 120px;
    background-position: -700px -60px;
    background-image: url('https://user-images.githubusercontent.com/87353284/162628899-dcdd39db-3363-48a1-b3de-2e850889ec97.jpeg');
    background-size: 340%;
  }

  .optionSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 200px;
  }

  .options {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  }

  .answer-check {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    min-height: 30px;
    font-size: 10px;
    color: #a4a4a4;
    background: #d8d8d8;
    border-radius: 5px;
    cursor: not-allowed;
    border: none;
    outline: none;

    &.open {
      background: #424242;
      color: #fff;
      cursor: pointer;

      &:active {
        box-shadow: 1px 1px 0 rgb(0, 0, 0, 0.5);
        position: relative;
      }
    }
  }
`;

const AnswerSection = styled.div`
  margin-top: 3px;
  flex: 4 0 0;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Answer = styled.div`
  font-size: 8px;
  padding: 8px;
  background: #f2f2f2;
`;
