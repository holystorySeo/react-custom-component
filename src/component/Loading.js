import React from 'react';
import styled from 'styled-components';

export function Loading() {
  return (
    <LoadingContainer>
      <div className="card skeleton" />
    </LoadingContainer>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  height: 80%;
  width: 100%;

.card {  
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.1);
 
}
.skeleton {
  width: 90%;
  height: 95%;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0) 70%
    ),
   linear-gradient(lightgrey 100px, transparent 0);
  background-position: 5px 10px, 5px 10px;
  background-size: 100px 100px, 97% 120px;
  background-repeat: repeat-y;
  animation: skeleton 1s infinite;
}
@keyframes skeleton {
  to {
    background-position:
      100% 10px,
      5px 10px
`;
