import React, { useState } from 'react';
import styled from 'styled-components';

export function Modal({ handleSubContainerBorder }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  const moveTogithub = () => {
    window.open(`https://github.com/holystorySeo`);
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
            <Desc1>
              Hello, visitors!
              <br />
              Thank you for comming!
            </Desc1>
            <Desc2>
              by holystorySeo
              <img
                role="presentation"
                src="https://avatars.githubusercontent.com/u/87353284?v=4"
                alt="없음"
                onClick={moveTogithub}
              />
            </Desc2>
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

// 모달창 배경색: white 부분
const BoxInModal = styled.div`
  width: 17%;
  min-width: 200px;
  height: 20%;
  background: white;
  margin-top: 541px;
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

// 모달차 텍스트 Hello, visitors! 부분
const Desc1 = styled.div`
  height: 65%;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 5px;
    width: 25px;
    height: 25px;
    border-radius: 70%;
  }
  @media (max-width: 1400px) {
    font-size: 1rem;
    line-height: 25px;
  }
`;

// 모달창 텍스트 by holystorySeo 부분
const Desc2 = styled.div`
  height: 65%;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  color: #a4a4a4;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 5px;
    width: 30px;
    height: 30px;
    border-radius: 70%;
    cursor: pointer;
  }
`;
