import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

export const InputBox = styled.div`
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
  border: 1px #bbb dashed;
  border-radius: 10px;
  margin-left: 1rem;
`;

export const InputEdit = styled.input`
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
`;

export const InputView = styled.div`
  text-align: center;
  align-items: center;
  margin-top: 3rem;
  div.view {
    margin-top: 3rem;
  }
`;

export function MyInput({ value, handleValueChange }) {
  const inputEl = useRef(null);
  const [isEditMode, setEditMode] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEditMode) {
      inputEl.current.focus();
    }
  }, [isEditMode]);

  const handleClick = () => {
    setEditMode(!isEditMode);
  };

  const handleBlur = () => {
    setEditMode(false);
    handleValueChange(newValue);
  };

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <InputBox>
      {isEditMode ? (
        <InputEdit
          type="text"
          value={newValue}
          ref={inputEl}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      ) : (
        <span role="presentation" onClick={handleClick}>
          {newValue}
        </span>
      )}
    </InputBox>
  );
}

const initailValue = {
  name: '김코딩',
  age: 20,
};

export function ClickToEdit() {
  const [name, setName] = useState(initailValue.name);
  const [age, setAge] = useState(initailValue.age);

  return (
    <>
      <InputView>
        <label htmlFor="name">이름</label>
        <MyInput
          value={name}
          handleValueChange={(newValue) => setName(newValue)}
        />
      </InputView>
      <InputView>
        <label htmlFor="age">나이</label>
        <MyInput
          value={age}
          handleValueChange={(newValue) => setAge(newValue)}
        />
      </InputView>
      <InputView>
        <div className="view">
          이름 {name} 나이 {age}
        </div>
      </InputView>
    </>
  );
}
