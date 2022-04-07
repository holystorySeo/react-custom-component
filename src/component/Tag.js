import React, { useState } from 'react';
import styled from 'styled-components';

const TagSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const TagSectionContainer = styled.div`
  width: 60%;
  padding: 7px;
  min-height: 13%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  border: 2px solid #e6e6e6;
  border-radius: 10px;

  &:focus-within {
    border: 1px solid #8000ff;
  }
`;

export const TagListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TagList = styled.li`
  margin: 5px;
  padding: 5px;
  width: auto;
  height: 20px;
  border-radius: 5px;
  background-color: #8000ff;
  color: white;
  font-size: 15px;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OneTagSection = styled.span`
  font-size: 10px;
  width: auto;
`;

export const TagCloseIcon = styled.span`
  margin-left: 5px;
  background: white;
  border-radius: 50px;
  width: 15px;
  height: 15px;
  color: #8000ff;
  text-align: center;
  line-height: 15px;
  font-weight: 600;
  cursor: pointer;
`;

export const InputTag = styled.input.attrs({
  type: 'text',
  placeholder: 'Place enter to add Tags',
})`
  border: none;
  width: auto;
  height: 30%;
  margin: 5px;

  :focus {
    outline: none;
  }
  ::placeholder {
    font-size: 13px;
  }
`;

export function Tag() {
  const [isBeenTag, setIsBeenTag] = useState(false); // 해시태그가 있는지 여부 체크
  const [inputValue, setInputValue] = useState(''); // 입력값 체크
  const [tagData, setTagData] = useState([]);

  const checkInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const addTagData = (e) => {
    if (e.key === 'Enter') {
      setTagData([...tagData, inputValue]);
      setIsBeenTag(true);
      e.target.value = '';
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
        <InputTag onKeyPress={addTagData} onChange={checkInputValue} />
      </TagSectionContainer>
    </TagSectionWrapper>
  );
}
