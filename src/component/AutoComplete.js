import { useState } from 'react/cjs/react.development';
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
  border: 2px solid #E6E6E6;
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
  border-right: 2px solid #E6E6E6;
  border-bottom: 2px solid #E6E6E6;
  border-left: 2px solid #E6E6E6;
  border-radius: 0 0 1rem 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  >.dropDownList {
    width: 98%;
    padding-left: 15px;
    font-size: 15px;
    margin-top: 5px;

    &:hover {
      background: #E6E6E6;
  }
  }
`;

export const AutoComplete = () => {
  const dataBase = [
    'culture', 'experience', 'education', 
    'symbol', 'effect', 'liberty', 
    'affair', 'comfort', 'affair'
  ]
  const [ inputValue, setInputValue ] = useState('')
  const [ hasText, setHasText ] = useState(false);
  const [ matchedList, setMatchedList ] = useState([])

  const handleCloseDropDown = () => {
    setInputValue('');
    setHasText(false);
  }

  const checkInputValue = (e) => {
    setInputValue(e.target.value);
    setHasText(true);
    setMatchedList(dataBase.filter((el) => {
      return el.includes(e.target.value);
    }))

    if(e.target.value === '') {
      setHasText(false);
    }
  }

  const removeInputValue = () => {
    setInputValue('');
    setHasText(false);
  }

  const selectList = (e) => {
    e.stopPropagation();
    setInputValue(e.target.textContent)
  }

  return (
    <>
      <AutoCompleteWrapper onClick={handleCloseDropDown}>
        <AutoCompleteContainer hasText={hasText}>
          <AutoCompleteInput value={inputValue} onKeyPress={checkInputValue} onChange={checkInputValue}></AutoCompleteInput>
          <AutoCompleteCloseIcon onClick={removeInputValue}>&times;</AutoCompleteCloseIcon>
        </AutoCompleteContainer>
        {hasText 
          ? <DropDownContainer>
              {matchedList.map((list, idx) => {
                return (
                  <li key={idx} className='dropDownList' onClick={selectList}>{list}</li>
                )
              })}
            </DropDownContainer> 
          : ''}
      </AutoCompleteWrapper>
    </>
  )
}

