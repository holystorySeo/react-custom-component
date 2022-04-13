/* 
  React custom component v1.0
  - Toggle 스위치 on/off 컴포넌트
  - 작성자: holystorySeo(https://github.com/holystorySeo)
  - 마지막 업데이트: 2022.04.12
*/

import React, { useState } from 'react';
import styled from 'styled-components';

export function AutoComplete({ subContainerBorder, handleSubContainerBorder }) {
  const database = [
    'culture',
    'experience',
    'education',
    'symbol',
    'effect',
    'liberty',
    'affair',
    'comfort',
    'achievement',
  ];
  const [inputValue, setInputValue] = useState('');
  const [hasText, setHasText] = useState(false);
  const [matchedList, setMatchedList] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const handleCloseDropDown = () => {
    setInputValue('');
    setHasText(false);
    setSelectedIdx(-1);
    if (subContainerBorder) handleSubContainerBorder();
  };

  // 검색창에 값을 입력하면 실행
  const checkInputValue = (e) => {
    // database에서 검색어로 filter한 결과
    const searchResult = database.filter((el) => {
      return el.includes(e.target.value);
    });

    if (searchResult.length !== 0) {
      handleSubContainerBorder();
    }

    setInputValue(e.target.value);
    setHasText(true);
    setMatchedList(searchResult);

    if (e.target.value === '') {
      setHasText(false);
    }
  };

  // close 버튼을 누르면 실행
  const removeInputValue = () => {
    setInputValue('');
    setHasText(false);
    setSelectedIdx(0);
    handleSubContainerBorder();
  };

  const selectList = (e) => {
    e.stopPropagation();
    setInputValue(e.target.textContent);
    setHasText(false); // 클릭하면 Dropdown 리스트가 사라짐
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // 검색 결과가 있고 selectedIdx가 초기값일 경우 검색 리스트의 0번 인덱스 값 hover
      if (matchedList.length === selectedIdx + 1) {
        setSelectedIdx(0);
        setInputValue(matchedList[0]);
      } else {
        // 인덱스값을 1씩 증가시킨다.
        setInputValue(matchedList[selectedIdx + 1]);
        setSelectedIdx(selectedIdx + 1);
      }
    }

    if (e.key === 'ArrowUp') {
      if (selectedIdx === 0) {
        setSelectedIdx(matchedList.length - 1);
        setInputValue(matchedList[matchedList.length - 1]);
      } else if (selectedIdx === -1) {
        return false;
      } else {
        setSelectedIdx(selectedIdx - 1);
        setInputValue(matchedList[selectedIdx - 1]);
      }
    }
  };

  const handleMouseOver = (idx) => {
    setSelectedIdx(idx);
  };

  return (
    <AutoCompleteWrapper onClick={handleCloseDropDown}>
      <InputValueContainer hasText={hasText}>
        <div className="svg-magnify">
          <svg
            width="16"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"
              fill="#32383E"
            />
          </svg>
        </div>

        <InputValueSection
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={checkInputValue}
        />
        {hasText ? (
          <AutoCompleteCloseIcon onClick={removeInputValue}>
            &times;
          </AutoCompleteCloseIcon>
        ) : (
          ''
        )}
      </InputValueContainer>
      {hasText ? (
        <DropDownContainer>
          {matchedList.length !== 0 ? (
            matchedList.map((list, idx) => {
              return (
                <li
                  role="presentation"
                  key={idx}
                  className={`dropdown-list ${
                    selectedIdx === idx ? 'select--focused' : ''
                  }`}
                  onClick={selectList}
                  onMouseOver={() => handleMouseOver(idx)}
                  onFocus={handleMouseOver}
                >
                  {list}
                </li>
              );
            })
          ) : (
            <div className="no-result">검색결과가 없습니다.</div>
          )}
        </DropDownContainer>
      ) : (
        ''
      )}
    </AutoCompleteWrapper>
  );
}

const AutoCompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 87%;
  width: 100%;
`;

const InputValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  width: 80%;
  min-height: 13%;
  border: 2px solid #e6e6e6;
  border-radius: ${(props) => (props.hasText ? '10px 10px 0 0' : '10px')};

  .svg-magnify {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
`;

const InputValueSection = styled.input`
  width: 93%;
  height: 70%;
  border: none;
  font-size: 1rem;
  margin-left: 10px;
  margin-right: 3px;
  :focus {
    outline: none;
  }
`;

const AutoCompleteCloseIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
`;

const DropDownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 7%;
  border-top: none;
  border-right: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;
  border-left: 2px solid #e6e6e6;
  border-radius: 0 0 10px 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  letter-spacing: -0.018em;
  overflow-y: auto;

  > .dropdown-list {
    width: 98%;
    margin: 3px;
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 1.2rem;
    cursor: pointer;

    /* &:hover {
      background: #e6e6e6;
    } */

    &.select--focused {
      background: #e6e6e6;
    }
  }

  > .no-result {
    width: 98%;
    margin: 3px;
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 1rem;
  }
`;
