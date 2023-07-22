import React from "react";
import styled from "styled-components";
import gosumhome3 from "../img/gosumhome3.png";

const Header2Wrapper = styled.div`

  .header-inner {
    border-bottom: 1px solid #051619;
    font-size: 2.7rem;
    letter-spacing: -0.025rem;
    background: #eae7de;
    margin-top: 0; /* Reset the margin to remove extra white space */
  /* display: flex; */
   padding-top: 10px;
   padding-bottom: 10px;
.intro-inner{
  justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
}
   
  }
  .discription{
    padding: 40% 10% 0% 10%;

  }
  .intro-head-subhead{
    max-width: 560px;
    font-size: 1.125rem;
    padding: 0% 0% 0% 20%;

  }
  .desktop-block{
    padding: 0% 0% 0% 20%;
    padding-left: 20px;
  }
`;

const Header2 = () => {
  return (
    <Header2Wrapper>
        <h1 className="header-inner">
          <div className="intro-inner">
            우리가 시간이 없지, 세상이 안 궁금하냐!
          </div>
          
        </h1>
        <div className="description">
          <p className="intro-head-subhead">
            ✨지금 <b>557,043명</b>이 뉴닉을 읽고 있어요.
          </p>
          <p style={{ marginLeft: "20%" }}>
            세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은
            아니잖아요!&nbsp;
            <span className="desktop-block">
              월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
            </span>
          </p>
        </div>
        <div className="textfield">{/* Input */}</div>
    
    </Header2Wrapper>
  );
};

export default Header2;
