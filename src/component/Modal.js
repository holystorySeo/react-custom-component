import React, { useState } from 'react';
import styled from 'styled-components';

export function Modal({ handleSubContainerBorder }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn
          className={`${isOpenModal ? 'modal--opened' : ''}`}
          onClick={() => {
            modalHandler();
            handleSubContainerBorder();
          }}
        >
          {' '}
          {isOpenModal === false ? 'Open Modal' : 'Opened!'}
        </ModalBtn>
      </ModalContainer>
      {isOpenModal ? (
        <ModalBackground>
          <BoxInModal>
            <Upper>
              <CloseBtn
                onClick={() => {
                  modalHandler();
                  handleSubContainerBorder();
                }}
              >
                &times;
              </CloseBtn>
            </Upper>
            <Desc>
              Hello,
              <br />
              React custom components!
            </Desc>
          </BoxInModal>
        </ModalBackground>
      ) : null}
    </>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  line-height: 20rem;
  text-align: center;
  margin: 0 auto;
  width: 30%;
`;

const ModalBtn = styled.button`
  width: 100px;
  height: 2.5rem;
  background-color: #a4a4a4;
  border-radius: 50px;
  color: white;
  font-weight: 900;
  cursor: pointer;
  border: none;

  &.modal--opened {
    background-color: coral;
  }
`;

const BoxInModal = styled.div`
  width: 17%;
  height: 20%;
  background: white;
  margin-top: 535px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  font-size: 2rem;
`;

const Upper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  padding-top: 5px;
`;

const CloseBtn = styled.div`
  cursor: pointer;
`;

const Desc = styled.div`
  height: 65%;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
`;
