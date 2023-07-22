// Header.js (예시 컴포넌트 파일 이름)
import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";

// 스타일드 컴포넌트로 스타일 정의
const HeaderWrapper = styled.header`
  .header-out {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eae7de;
    border-bottom: 1px solid #051619;
    position: relative;
    z-index: 4;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .header-in {
    display: flex;
    align-items: center;
  }

  /* 로고 이미지를 가운데 정렬하도록 스타일 설정 */
  img {
    width: 226px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 226px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);


  }
  .box {
    width: 40px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }
  /* 상자들을 세로로 정렬하는 미디어 쿼리 설정 */
  @media screen and (max-width: 600px) {
    .header-in {
      flex-direction: column;
      align-items: center;
    }
  }
`;

// 컴포넌트 함수 선언 (함수 컴포넌트)
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header-out">
        <div className="header-in">
          <img src={logo} alt="헤더 이미지" />
          </div>
          <div className="box"></div>
        <div className="box"></div>
      </div>
    </HeaderWrapper>
  );
};

// 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
export default Header;
