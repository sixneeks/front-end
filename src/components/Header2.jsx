import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import CheckBox from "./CheckBox";
import Button from "./Button";
import gosumhome3 from "../img/gosumhome3.png";



const Header2 = () => {
  const handleButtonClick = () => {
    // 버튼 클릭 이벤트 처리
    console.log("앱 다운로드 버튼이 클릭되었습니다.");
  };

  return (
    <Header2Wrapper>
      <StSlogan>
        <StSloganInner>
          우리가 시간이 없지, <div>세상이 안 궁금하냐!</div>
        </StSloganInner>
      </StSlogan>
      <StIntroHead>
        <StIntroHeadInner>
        
            <StIntroHeadText>
                🚀지금 구독하면 <b>내일 아침에</b> 읽을 수 있어요.
                <br />
                ✨지금 <b>557,043명</b>이 뉴닉을 읽고 있어요.
            </StIntroHeadText>
            <StIntroHeadText >
                세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은
                아니잖아요!
                <br />
                월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
            </StIntroHeadText>
           
        <StInputBox>
            <Input type={"text"} placeholder={"이메일 주소"} />
            <Input type={"text"} placeholder={"닉네임"} />
            <CheckBox text={'개인정보 이용-수집에 동의합니다.'}/>
            <CheckBox text={"광고성 정보 수신에 동의합니다."}/>
        </StInputBox>
          <StbuttonSet>
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
          </StbuttonSet>
        </StIntroHeadInner>
        <StImgContainer>
          <StGosum src={gosumhome3} alt="gosumhome3" />
        </StImgContainer>
      </StIntroHead>
      
    </Header2Wrapper>
  );
};
export default Header2;


const Header2Wrapper = styled.div`

`;

const StSlogan = styled.div`
    border-bottom: 1px solid #051619;
    font-size: 2.5rem;
    letter-spacing: -0.025rem;
    background: #eae7de;
    margin: 0;
    padding: 14px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const StSloganInner = styled.div`
    max-width: 1200px;
    min-width: 1000px;
    width : 65%;
    font-weight: 700;
    display: flex;
    margin: 0 auto;
    padding: 0 22%;
`

const StIntroHead = styled.div`
    background: #ff6b00;
    height: 460px;
    padding-Top: 10px;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: row;
    gap: 30px;
`
const StIntroHeadInner = styled.div`
    max-width: 1200px;
    
    margin-left: auto;
    padding-left:22%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const StIntroHeadText = styled.p`
    font-size: 15px;
    width : 560px;
    line-height: 25px;
    padding-left:30px;
`

const StInputBox = styled.div`
    font-size: 14px;
    width: 50%;
    width: 452px;
    padding-left:30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const StbuttonSet = styled.div`
  display: flex;
  gap: 10px;
  width: 452px;
  padding-left:30px;
  margin-top : 32px;
`
const StImgContainer = styled.div`
  margin-right: auto;
  padding-right:22%;
`

const StGosum = styled.img`
  width: 530px;
  position: relative;
  bottom : 35px;
`