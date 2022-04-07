import React, { useState } from 'react';
import styled from 'styled-components';

export const AutoCompleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 87%;
  width: 100%;
`;

export const AutoCompleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
  width: 80%;
  height: 15%;
  border: 2px solid #e6e6e6;
  border-radius: ${(props) => (props.hasText ? '1rem 1rem 0 0' : '1rem')};
`;

export const AutoCompleteInput = styled.input`
  width: 93%;
  height: 70%;
  border: none;
  font-size: 15px;
  margin-left: 10px;
  margin-right: 3px;

  :focus {
    outline: none;
  }
`;

export const AutoCompleteCloseIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
`;

export const DropDownContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  min-height: 15%;
  border-top: none;
  border-right: 2px solid #e6e6e6;
  border-bottom: 2px solid #e6e6e6;
  border-left: 2px solid #e6e6e6;
  border-radius: 0 0 1rem 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  > .dropDownList {
    width: 98%;
    padding-left: 15px;
    font-size: 15px;
    margin-top: 5px;

    &:hover {
      background: #e6e6e6;
    }

    &.select--focused {
      background: #e6e6e6;
    }
  }
`;

export function AutoComplete() {
  const dataBase = [
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
  const [isIdxSelected, setIsIdxSelected] = useState();

  const handleCloseDropDown = () => {
    setInputValue('');
    setHasText(false);
    setIsIdxSelected();
  };

  const checkInputValue = (e) => {
    setInputValue(e.target.value);
    setHasText(true);
    setMatchedList(
      dataBase.filter((el) => {
        return el.includes(e.target.value);
      })
    );

    if (e.target.value === '') {
      setHasText(false);
    }
  };

  const removeInputValue = () => {
    setInputValue('');
    setHasText(false);
    setIsIdxSelected();
  };

  const selectList = (e) => {
    e.stopPropagation();
    setInputValue(e.target.textContent);
    setHasText(false); // 클릭하면 Dropdown 리스트가 사라짐
  };

  const handleArrowKey = (e) => {
    const maxId = matchedList.length; // 드롭다운 리스트의 최대 인덱스값을 구한다.

    if (e.key === 'ArrowDown') {
      if (isIdxSelected === undefined) {
        // 맨처음 키보드 down 할 때 드랍다운 리스트 인덱스 0번을 선택한다.
        setIsIdxSelected(0);
        setInputValue(matchedList[0]);
      } else if (isIdxSelected !== undefined) {
        // 두번째 키보드 down 부터
        if (maxId === isIdxSelected + 1) {
          // maxId와 isIdxSelected 값의 차이가 1일 경우 인덱스는 0을 설정한다.
          setIsIdxSelected(0); // isIdxSelected의 값은 0이 된다.
          setInputValue(matchedList[0]);
        } else {
          // 나머지의 경우에는 idx를 1씩 증가시킨다.
          setIsIdxSelected(isIdxSelected + 1);
          setInputValue(matchedList[isIdxSelected + 1]);
        }
      }
    }

    if (e.key === 'ArrowUp') {
      if (isIdxSelected === undefined) {
        setIsIdxSelected(maxId - 1);
        setInputValue(matchedList[maxId - 1]);
      } else if (isIdxSelected !== undefined) {
        if (isIdxSelected === 0) {
          setIsIdxSelected(maxId - 1);
          setInputValue(matchedList[maxId - 1]);
        } else {
          setIsIdxSelected(isIdxSelected - 1);
          setInputValue(matchedList[isIdxSelected - 1]);
        }
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInputValue(e.target.value);
      setHasText(false);
    }
  };

  return (
    <AutoCompleteWrapper onClick={handleCloseDropDown}>
      <AutoCompleteContainer hasText={hasText}>
        <AutoCompleteInput
          value={inputValue}
          onKeyPress={handleKeyPress}
          onKeyDown={handleArrowKey}
          onChange={checkInputValue}
        />
        {hasText ? (
          <AutoCompleteCloseIcon onClick={removeInputValue}>
            &times;
          </AutoCompleteCloseIcon>
        ) : (
          ''
        )}
      </AutoCompleteContainer>
      {hasText ? (
        <DropDownContainer>
          {matchedList.map((list, idx) => {
            return (
              <li
                role="presentation"
                key={idx}
                className={`dropDownList ${
                  isIdxSelected === idx ? 'select--focused' : ''
                }`}
                onClick={selectList}
              >
                {list}
              </li>
            );
          })}
        </DropDownContainer>
      ) : (
        ''
      )}
    </AutoCompleteWrapper>
  );
}
