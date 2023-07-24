import React from 'react';
import styled from 'styled-components';
import waitinggosum2 from "../img/waitinggosum2.png";
import waitinggosum from "../img/waitinggosum.png";
import arrow from "../img/arrow.png";

function UnderBanner() {
  return (
    <div>
      <Stouter>
        <Stinner>
          <BannerImage2 src={waitinggosum2} alt="배너 이미지" />
          <HoverImage src={waitinggosum} alt="마우스 오버 이미지" />
        </Stinner>
        <Sttext>
          더 편하게 보고 싶다면? 뉴닉 앱에서 만나요 ! 
          {/* <Starrow src={} /> */}
        </Sttext>
      </Stouter>
    </div>
  );
}

export default UnderBanner;

const Stouter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 0;
  margin-top: 0;
  /* padding-top: 90px; */
  position: relative;
 
`;

const Stinner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 91px;
  margin-top: 100px;
  margin-bottom: 0;
  border-top: 2px solid #051619;
  cursor: pointer;
  background: #ff6b00;
  z-index: 0;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &:hover {
    & > img:first-child {
      opacity: 0;
    }
    & > img:last-child {
      display: block;
    }
  }
`;

const BannerImage2 = styled.img`
  width: 300px;
  position: absolute;
  z-index: 2;
  bottom: 0px;
`;

const HoverImage = styled.img`
  width: 300px;
  display: none;
  position: absolute;
  z-index: 2;
  bottom: 0px;
`;

const Sttext = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  border-top: 1px solid #051619;
  border-bottom: 2px solid #051619;
  background: #fff;
  position: relative;
  color: #051619;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  cursor: pointer;

  &::after {
    content: url(${arrow}); /* 화살표 이미지 경로를 여기에 넣으세요. */
    width: 20px; /* 화살표 이미지 크기를 조정하세요. */
    padding-top: 6px;
    margin-left: 15px; /* 화살표 이미지와 텍스트 사이의 간격을 조정하세요. */
  }
  
`;
