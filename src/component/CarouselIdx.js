import React, { useState } from 'react';
import styled from 'styled-components';
import { dummySrc } from '../static/dummys';

const WholeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;

  > button {
    margin: 10px;
    width: 50x;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;

    &:hover {
      transition: all 0.3s ease-in-out;
      background-color: coral;
    }
  }
`;

const IMG = styled.img`
  object-fit: cover;
  border: 1px solid black;
  border-radius: 10px;
  width: 25%;
  height: 100%;
`;

export function CarouselIdx() {
  const [currentImgIdx, setCurrentImgIdx] = useState(0); // 현재 보여지는 인덱스 값, 초기값 0

  const ImgHandler = (btnType) => {
    const maxIdx = dummySrc.length - 1;

    if (btnType === 'minus' && currentImgIdx >= 0) {
      setCurrentImgIdx(currentImgIdx - 1);
      if (currentImgIdx === 0) setCurrentImgIdx(maxIdx); // 인덱스 맨처음에 왔을 때는 가장 마지막 인덱스로 이동
    } else if (btnType === 'plus' && currentImgIdx <= maxIdx) {
      setCurrentImgIdx(currentImgIdx + 1);
      if (currentImgIdx === maxIdx) setCurrentImgIdx(0); // 인덱스 맨끝으로 왔을 때는 가장 처음 인덱스로 이동
    }
  };

  return (
    <WholeContainer>
      <button type="button" onClick={() => ImgHandler('minus')}>
        <img
          src="https://img.icons8.com/ios-glyphs/50/000000/double-left--v1.png"
          alt="없음"
        />
      </button>
      <IMG src={dummySrc[currentImgIdx]} />
      <button type="button" onClick={() => ImgHandler('plus')}>
        <img
          src="https://img.icons8.com/ios-glyphs/50/000000/double-right.png"
          alt="없음"
        />
      </button>
    </WholeContainer>
  );
}
