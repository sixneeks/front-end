// Header.js (예시 컴포넌트 파일 이름)
import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";


// 컴포넌트 함수 선언 (함수 컴포넌트)
const Header = () => {
  return (
    <StOutHeader>
      <StInHeader>
        <Stemptied></Stemptied>
        <Stlogo src={logo} alt="헤더 이미지" />
        <StBoxSet>
          <StBox></StBox>
          <StBox></StBox>
        </StBoxSet>
      </StInHeader>
    </StOutHeader>
  );
};

// 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다.
export default Header;

const StOutHeader = styled.div`
width: 100%;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
background-color: #eae7de;
border-bottom: 1px solid #051619;
`
const StInHeader = styled.div`
  box-sizing: border-box;
  max-width: 1360px;
  width : 90%;
  margin: 42px auto 35px;
  display: flex;
    flex-direction : row;
    justify-content:space-between;
    position: relative;
`
const Stemptied = styled.div`
  width: 96px;
`

const Stlogo = styled.img`
  width: 226px;
  margin-left: 30%;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`

const StBoxSet = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction : row;
`

const StBox =styled.div`
    width: 48px;
    height: 48px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`






// 스타일드 컴포넌트로 스타일 정의
// const HeaderWrapper = styled.header`
//   .header-out {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: #eae7de;
//     border-bottom: 1px solid #051619;
//     position: relative;
//     padding: 30px 0px;
//   }

//   .header-in {
//     display: flex;
//   }

//   /* 로고 이미지를 가운데 정렬하도록 스타일 설정 */
//   img {
//     width: 226px;
//     height: 32px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 226px;
//     box-sizing: border-box;
//     position: absolute;
//     left: 50%;
//     -webkit-transform: translateX(-50%);
//     transform: translateX(-50%);


//   }
//   .box {
//     width: 40px;
//     height: 40px;
//     border: 1px solid black;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     position: relative;
//   }
//   /* 상자들을 세로로 정렬하는 미디어 쿼리 설정 */
//   @media screen and (max-width: 600px) {
//     .header-in {
//       flex-direction: column;
//       align-items: center;
//     }
//   }
// `;