import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <>
      <Stall>
        <Stouter>
          <Sthistory>
            <span>ㅇㅇㅇ</span> 뉴니커,
          </Sthistory>
          <Sthistory2>어떤 사람인지 더 알고 싶어요!</Sthistory2>
          <Stmail>뉴니커 정보</Stmail>
        </Stouter>

        <Stbuttons>
          <Stbutton1 to="/">
            <Stbox>닉네임</Stbox>
            <Stnum1>고슴슴</Stnum1>
          </Stbutton1>
          <Stbutton2 to="/">
            <Stbox>출생년도</Stbox>
            <Stnum2>23년</Stnum2>
          </Stbutton2>
          <Stbutton3 to="/">
            <Stbox>성별</Stbox>
            <Stnum3>고슴</Stnum3>
          </Stbutton3>
          <Stbutton4 to="/">
            <Stbox>배송지</Stbox>
            <Stnum4>어디게?</Stnum4>
          </Stbutton4>
          <Stbutton5 to="/">
            <Stbox>이모지</Stbox>
            <Stnum5>🦔</Stnum5>
          </Stbutton5>
        </Stbuttons>
      </Stall>
    </>
  );
};

export default Setting;

const Stall = styled.div`
  background-color: #eae7de;
  padding-left: 8%;
  padding-top: 4%;
  padding-bottom: 100px;
`;

const Stouter = styled.div``;
const Sthistory = styled.div`
  font-size: 30px;
  font-weight: 400;
`;
const Sthistory2 = styled.div`
  font-size: 30px;
  font-weight: 400;
`;
const Stmail = styled.div`
  font-size: 15px;
  margin-top: 30px;
  font-weight: 700;
`;

const Stbuttons = styled.div`
  margin-top: 10px;
  width: 80vw; /* 화면 너비의 80%로 설정합니다. */
  @media (min-width: 1400px) {
    width: 1400px; /* 화면 너비가 1200px 이상일 때는 최대 너비를 1200px로 설정합니다. */
    height: 500px;
    font-size: 100%;
  }
`;
const Stbox = styled.div`
  width: 50px;

`;

const Stbutton1 = styled(Link)`
  display: flex;
  align-items: center;

  border: 1px solid #051619;
  margin-top: -1px;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2%;

  justify-content: space-between;
`;
const Stbutton2 = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2%;
  justify-content: space-between;
`;
const Stbutton3 = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2%;
  justify-content: space-between;
`;
const Stbutton4 = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2%;
  justify-content: space-between;
`;
const Stbutton5 = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 60px;
  font-size: 14px;
  font-weight: 600;
  padding-left: 2%;
  justify-content: space-between;
`;
const Stnum1 = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80%;
`;
const Stnum2 = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80%;
`;
const Stnum3 = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80%;
`;
const Stnum4 = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80%;
`;
const Stnum5 = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  margin-right: 80%;
`;
