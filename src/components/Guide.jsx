import React from 'react';
import styled, { keyframes } from "styled-components";
import Arrow from '../img/GuideArrow.png';
import { Link } from 'react-router-dom'; 

function Guide({ text, to, isHover, onClick }) {

  return (
    <StOutGuide>
      {/* 외부 사이트 링크 */}
      <Link to={to}>
        <StInGuide ishover={isHover} onClick={onClick}>
          <div className='text'>{text}</div>
          <div className='arrow'><img src={Arrow} alt="화살표" /></div>
          {isHover && (
            <Hover>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
              <p>뉴스레터 구독하기</p>
            </Hover>
          )}
        </StInGuide>
      </Link>
    </StOutGuide>
  )
}

export default Guide;

const StOutGuide = styled.div`
  background-color: #eae7de;
  border-bottom: 1px solid #051619;
  overflow: hidden;

  &:hover {
    background-color: #FFFFFF;
  }
`;

const StInGuide = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  height: 67px;
  align-items: center;
  box-sizing: border-box;
  max-width: 1360px;
  margin: 0 auto;

  .text {
    font-size: 21px;
    font-weight: bold;
  }

  .arrow {
    font-size: 50px;
  }

  ${props => props.ishover && `
    &:hover .text, &:hover .arrow {
      display: none;
    }

    &:hover ${Hover} {
      display: flex;
    }
  `}
`;

const slideIn = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: -70%;
  }
`;

const Hover = styled.div`
  display: none;
  position: absolute;
  top: 0;

  p { 
    width: 220px;
    line-height: 67px;
    text-align: center;
    font-size: 21px;
    font-weight: bold;
    margin: 0;
  }

  &:hover {
    animation: ${slideIn} 15s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
  }
`