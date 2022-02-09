import { useState } from 'react';
import styled from 'styled-components';

export const ModalBackground =  styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: block; 
  height: 100%;
  line-height: 20rem; 
  text-align: center; 
  margin: 0 auto; 
  width: 30%;
`;

export const ModalBtn = styled.button`
  width: 100px;
  height: 2.5rem;
  background-color: #8000FF;
  border-radius: 50px;
  color: white;
  font-weight: 900;
  cursor: pointer;
  border: none;
`;

export const BoxInModal = styled.div`
  width: 15%;
  height: 10%;
  background: white;
  margin-top: 535px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const Upper = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
`;

export const LeftUpper = styled.div`
  width: 90%;
`;

export const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10%;
  height: 20px;
  margin-top: 5px;
  margin-right: 10px;
  cursor: pointer;
`;

export const Desc = styled.div`
  height: 80%;
  text-align: center;
  line-height: 60px;
`;

export const Modal = () => {
  const [ isOpenModal, setIsOpenModal ] = useState(false);

  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={modalHandler}> {isOpenModal === false ? 'Open Modal' : 'Opened!'}</ModalBtn>
      </ModalContainer>
      {isOpenModal ? <ModalBackground>
        <BoxInModal onClick={(e) => e.stopPropagation()}>
          <Upper>
            <LeftUpper />
            <CloseBtn onClick={modalHandler}>&times;</CloseBtn>
          </Upper>
          <Desc>HELLO CODESTATES!</Desc>
        </BoxInModal>
      </ModalBackground> : null}
    </>
  )
}
