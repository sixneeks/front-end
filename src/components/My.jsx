import React from "react";
import styled from "styled-components";

const My = () => {
  return (
    <Stouter>
      <Sthistory>
      오늘 레터 읽고 왔슴?
      </Sthistory>
      <Sthistory2>
      이름 <span>💖</span> 뉴니커!
      </Sthistory2>
      <Stmail>
      메일주소
      </Stmail>
      <Stprofile>
        프로필 설정하기
      </Stprofile>
      </Stouter>

      
      
  );
};

export default My;


const Stouter = styled.div`
  background-color:#eae7de;
  padding-left: 5%;
  padding-top: 5%;

`
const Sthistory = styled.div`
  background-color:#eae7de;
  

`
const Sthistory2 = styled.div`
  background-color:#eae7de;
  

`
const Stmail = styled.div`
background-color:#eae7de;


`
const Stprofile = styled.div`
background-color:#eae7de;


`