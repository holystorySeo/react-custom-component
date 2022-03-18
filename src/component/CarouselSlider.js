import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { dummySrc } from '../static/dummys';

export function CarouselSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const maxSlideIndex = dummySrc.length - 1;

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(maxSlideIndex);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide >= maxSlideIndex) {
      setCurrentSlide(0); // 마지막 슬라이드의 경우에 슬라이드 인덱스를 초기화
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <CaroselSliderContainer>
      <Button onClick={prevSlide}>
        <img
          src="https://img.icons8.com/ios-glyphs/50/000000/double-left--v1.png"
          alt="없음"
        />
      </Button>
      <SliderContainer>
        <MovingContainer ref={slideRef}>
          {dummySrc.image.map((img, idx) => {
            return <IMG src={img} key={idx} alt="No Image" />;
          })}
        </MovingContainer>
      </SliderContainer>
      <Button onClick={nextSlide}>
        <img
          src="https://img.icons8.com/ios-glyphs/50/000000/double-right.png"
          alt="없음"
        />
      </Button>
    </CaroselSliderContainer>
  );
}

const CaroselSliderContainer = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
`;

const SliderContainer = styled.div`
  width: 40%;
  height: 100%;
  overflow: hidden; //영역을 넘어간 이미지 보이지 않게 처리
  border: 1px solid black;
`;

const MovingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex; //이미지 가로 나열
  border-radius: 10px;
`;

const IMG = styled.img`
  width: 100%;
`;

const Button = styled.button`
  margin: 20px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;

  > img {
    width: 100%;
  }

  &:hover {
    transition: all 0.1s ease-in-out;
    background-color: coral;
    border-radius: 5px;
  }
`;
