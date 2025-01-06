import styled, { keyframes } from 'styled-components'

const bring = keyframes`
  0%   {opacity: 0.2;}
  22%  {opacity: 0.4;}
  40%  {opacity: 0.6;}
  60%  {opacity: 0.8;}
  80%  {opacity: 0.6;}
  100% {opacity: 0.4;}
`

export const BoxIcon = styled.div`
  width: 100px;
  height: 80px;
  animation: ${bring} 2s infinite;
`

export const HeaderIcon = styled.div`
  width: 110%;
  height: 30%;
  background: rgb(244, 113, 33);
  margin-bottom: 2px;
  border-top-left-radius: 50px 50px;
  border-bottom-right-radius: 50px 50px;
  margin-left: 10px;
  border: 4px solid white;
`

export const BodyIcon = styled.div`
  width: 100%;
  height: 75%;
  background: rgb(65, 65, 65);
  transform: rotate(-25deg);
  border-radius: 100%;
  border: 4px solid white;
`

export const BodyInside = styled.div`
  background: white;
  width: 23%;
  height: 118%;
  transform: rotate(52deg);
  position: absolute;
  left: 44%;
  border-top-left-radius: 50px 75px;
  border-bottom-right-radius: 50px 60px;
  top: -21%;
`
