import styled from 'styled-components';

export const AutoCompleteWrapperr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;  
  height: 87%;
  width: 100%;
`;

export const AutoCompleteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 15%;
  border: 2px solid #E6E6E6;
  border-radius: 30px;
`;

export const AutoCompleteInput = styled.input`
  width: 93%;
  height: 70%;
  border: none;
  font-size: 15px;
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
  cursor: pointer;
`;

export const AutoComplete = () => {
  return (
    <>
      <AutoCompleteWrapperr>
        <AutoCompleteContainer>
          <AutoCompleteInput />
          <AutoCompleteCloseIcon>&times;</AutoCompleteCloseIcon>
        </AutoCompleteContainer>
      </AutoCompleteWrapperr>
    </>
  )
}

