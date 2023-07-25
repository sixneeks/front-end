import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const My = () => {
  
  return (
    <>
    <Stall>
    <Stouter>
      <Sthistory>
      반가워 죽겠슴,
      </Sthistory>
      <Sthistory2>
      이름 <span>💖</span> 뉴니커!
      </Sthistory2>
      <Stmail>
      메일주소
      </Stmail>
      <Stprofile to="/">
        프로필 설정하기
      </Stprofile>
      </Stouter>

<Stbuttons>
  <Stbutton1 to="/">
📙 끝까지 읽었슴<Stnum>7</Stnum>
  </Stbutton1>
  <Stbutton2 to="/">
    🧡 좋았슴<Stnum>2</Stnum>
  </Stbutton2>
  <Stbutton3  to="/">
    💸 주문내역<Stnum>0</Stnum>
  </Stbutton3>
</Stbuttons>
</Stall>
      </>
      
  );
};

export default My;

const Stall = styled.div`
  background-color:#eae7de;
  padding-left: 8%;
  padding-top: 4%;
  padding-bottom: 100px;
`

const Stouter = styled.div`



`
const Sthistory = styled.div`
  font-size: 35px;
  font-weight: 400;
  

`
const Sthistory2 = styled.div`
  font-size: 35px;
  font-weight: 700;
  

`
const Stmail = styled.div`
font-size: 13px;
margin-top: 18px;
font-weight: 600;


`
const Stprofile = styled(Link)`
display: flex;
font-size: 13px;
font-weight: 500;
text-decoration: underline;
margin-top: 30px;
&:hover {
    color:#ff6b00; /* 원하는 다른 색상으로 변경하십시오. */
    cursor: pointer; /* 커서 모양을 포인터로 변경합니다. */
  }


`
const Stbuttons = styled.div`
margin-top: 60px;
  width: 80vw; /* 화면 너비의 80%로 설정합니다. */

  @media (min-width: 1400px) {
    width: 1400px; /* 화면 너비가 1200px 이상일 때는 최대 너비를 1200px로 설정합니다. */
    height: 500px;
    font-size: 100%;
  }
`
const Stbutton1 = styled(Link)`
  display: flex;
  align-items: center;
 
  border: 1px solid #051619;
  margin-top: -1px;
  height: 80px;
  font-size: 30px;
  font-weight: 600;
  padding-left: 2%;
  
  justify-content: space-between;
  &:hover {
    background-color: #051619;
    color: white; /* 버튼 텍스트의 색상을 변경합니다. */
    cursor: pointer;
  }
`;
const Stbutton2 = styled(Link)`
 display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 80px;
  font-size: 30px;
font-weight: 600;
padding-left: 2%;
justify-content: space-between;
&:hover {
    background-color: #051619;
    color:white; /* 원하는 다른 색상으로 변경하십시오. */
    cursor: pointer; /* 커서 모양을 포인터로 변경합니다. */
  }
`
const Stbutton3 = styled(Link)`
 display: flex;
  align-items: center;
  border: 1px solid #051619;
  margin-top: -1px;
  height: 80px;
  font-size: 30px;
font-weight: 600;
padding-left: 2%;
justify-content: space-between;
&:hover {
    background-color: #051619;
    color:white; /* 원하는 다른 색상으로 변경하십시오. */
    cursor: pointer; /* 커서 모양을 포인터로 변경합니다. */
    
  }
`
const Stnum = styled.div`
 display: flex; 
 margin-right: 2%;
 
  
`