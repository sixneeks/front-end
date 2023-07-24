// Header.js (예시 컴포넌트 파일 이름)
import React from "react";
import logo from "../img/logo.png";
import person from "../img/person.png";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

// 컴포넌트 함수 선언 (함수 컴포넌트)
const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <div className="header-out">
        <div className="header-in">
          <img src={logo} alt="헤더 이미지" onClick={()=>{navigate('/')}} />
          
          <div className="box1">🔍</div>
          <div className="box2">
            <img
              src={person}
              alt="이미지"
              style={{
                width: "40%", // 원하는 크기로 조정하세요
                height: "40%", // 이미지 비율 유지
              }}
            />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

// 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
export default Header;

// 스타일드 컴포넌트로 스타일 정의
const HeaderWrapper = styled.header`
  .header-out {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eae7de;
    border-bottom: 1px solid #051619;
    position: relative;
    z-index: 4;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .header-in {
    display: flex;
    align-items: center;
    padding-left: 70%;
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
    cursor: pointer;
  }
  //-- 박스 위치 수정!
  .boxs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    /* flex: 1; 화면 크기가 작아지면 로고와의 간격이 자동으로 조정됩니다. */
  }

  .box1 {
    width: 48px;
    height: 48px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
  }

  .box2 {
    margin-left: -1px;
    width: 48px;
    height: 48px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
  }
`;
