/* 
  React custom component v1.0
  - Tag 입력/삭제 컴포넌트
  - 작성자: holystorySeo(https://github.com/holystorySeo)
  - 마지막 업데이트: 2022.04.12
*/

import React, { useState } from 'react';
import styled from 'styled-components';

export function Tag({ handleSubContainerBorder }) {
  const [isBeenTag, setIsBeenTag] = useState(false); // 해시태그가 있는지 여부 체크
  const [inputValue, setInputValue] = useState(''); // 입력값 체크
  const [tagData, setTagData] = useState([]);

  const checkInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addTagData = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      setTagData([...tagData, inputValue]);
      setIsBeenTag(true);
      e.target.value = '';
      setInputValue('');
      handleSubContainerBorder();
    }
  };

  const removeTagData = (idx) => {
    setTagData(
      tagData.filter((tag, id) => {
        return idx !== id;
      })
    );

    if (tagData.length === 0) {
      setIsBeenTag(false);
    }
  };

  const removeAllTagData = () => {
    if (isBeenTag) {
      setTagData([]);
      setIsBeenTag(false);
    }
  };

  return (
    <TagSectionWrapper>
      <TagSectionContainer>
        {isBeenTag ? (
          <TagListContainer>
            {tagData.map((tag, idx) => {
              return (
                <TagList key={idx}>
                  <OneTagSection>{tag}</OneTagSection>
                  <TagCloseIcon onClick={() => removeTagData(idx)}>
                    &times;
                  </TagCloseIcon>
                </TagList>
              );
            })}
          </TagListContainer>
        ) : (
          ''
        )}
        <InputTagSection onKeyPress={addTagData} onChange={checkInputValue} />
      </TagSectionContainer>
      <button
        type="button"
        className={`remove-all ${isBeenTag ? 'open' : ''}`}
        onClick={removeAllTagData}
      >
        전체 삭제
      </button>
    </TagSectionWrapper>
  );
}

const TagSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;

  .remove-all {
    margin-top: 15px;
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

const TagSectionContainer = styled.div`
  width: 80%;
  padding: 7px;
  min-height: 13%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  border: 10px solid #e6e6e6;
  border-radius: 10px;

  &:focus-within {
    border: 10px solid coral;
  }
`;

const TagListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 90%;
  overflow: auto;
`;

const TagList = styled.li`
  margin: 5px;
  padding: 5px;
  width: auto;
  height: 20px;
  border-radius: 5px;
  background-color: coral;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const OneTagSection = styled.span`
  font-size: 10px;
  width: auto;
`;

const TagCloseIcon = styled.span`
  margin-left: 5px;
  background: white;
  border-radius: 50px;
  width: 13px;
  height: 13px;
  color: #8000ff;
  font-weight: 600;
  font-size: 13px;
  line-height: 0.9;
  cursor: pointer;
  text-align: center;
`;

const InputTagSection = styled.input.attrs({
  type: 'text',
  placeholder: 'Press enter to add Tags',
})`
  border: none;
  width: auto;
  min-height: 20px;
  margin-left: 5px;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 13px;
  }
`;
