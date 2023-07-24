import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import CheckBox from "./CheckBox";
import Button from "./Button";
import gosumhome3 from "../img/gosumhome3.png";

const Header2Wrapper = styled.div`
  .header-inner {
    border-bottom: 1px solid #051619;
    font-size: 2.7rem;
    letter-spacing: -0.025rem;
    background: #eae7de;
    margin: 0; /* Reset the margin to remove extra white space */
    /* display: flex; */
    padding-top: 10px;
    padding-bottom: 10px;

    .intro-inner {
      justify-content: center; /* Center content horizontally */
      align-items: center; /* Center content vertically */
      display: flex;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .intro-head-subhead {
    /* max-width: 560px; */
    font-size: 1.125rem;
    padding-left: 20%;
  }
  .desktop-block {
  
  }
  
  
`;

const Stdescription = styled.div`
  
`;


const Stbuttons = styled.div`
 display: flex;
  gap: 10px;
  cursor: pointer;
`

const Header2 = () => {
  const handleButtonClick = () => {
    // 버튼 클릭 이벤트 처리
    console.log("앱 다운로드 버튼이 클릭되었습니다.");
  };

  return (
    <Header2Wrapper>
      <h1 className="header-inner">
        <div className="intro-inner">
          우리가 시간이 없지, 세상이 안 궁금하냐!
        </div>
      </h1>
      <div
        style={{ background: "#ff6b00", height: "470px", paddingTop: "10px" }}
      >
        <Stdescription>
          <p className="intro-head-subhead">
            🚀지금 구독하면 <b>내일 아침에</b> 읽을 수 있어요.
            <br />
            ✨지금 <b>557,043명</b>이 뉴닉을 읽고 있어요.
          </p>
          <p style={{ marginLeft: "20%" }}>
            세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은
            아니잖아요!
            <br />
            월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
          </p>
          </Stdescription>
      <div style={{ marginLeft: '20%'}}>
          <div className="textfield">
            <Input type={"text"} placeholder={"이메일 주소"} />
            <Input type={"text"} placeholder={"닉네임"} />
          </div>
          <div className="check-box">
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox />
              <span style={{ marginLeft: "10px" }}>
                개인정보 이용-수집에 동의합니다.
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <CheckBox />
              <span style={{ marginLeft: "10px" }}>
                광고성 정보 수신에 동의합니다.
              </span>
            </div>
          </div>
          <Stbuttons>
            <Button
              name="뉴스레터 무료로 구독하기"
              colorSet="뉴스레터 무료로 구독하기"
              onClick={handleButtonClick}
            />
            <Button
              name="앱 다운로드 하기 >"
              colorSet="앱 다운로드 하기 >"
              onClick={handleButtonClick}
            />
            </Stbuttons>
        </div>
      </div>
    </Header2Wrapper>
  );
};
export default Header2;

