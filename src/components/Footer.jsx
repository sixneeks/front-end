import React from 'react'
import { styled } from 'styled-components'
import logo from "../img/logo.png";
function Footer() {
  return (
    <StOutFooter>
      <StInFooter>
      <StOutLogo>
      <Stlogo src={logo} alt="로고" />
      </StOutLogo>
      <StOutButtonSet>
      <StButtonSet>
        <StButton>육닉탄생기</StButton>
        <StButton>고객센터</StButton>
        <StButton>제휴 문의</StButton>
        <StButton>인스타그램</StButton>
        </StButtonSet>
        <StButtonSet>
        <StButton>모두와 함께, 육닉</StButton>
        <StButton>물물교환</StButton>
        <StButton>여성의 날</StButton>
        <StButton>2020 총선</StButton>
        </StButtonSet>
        <StButtonSet>
        <StButton>서비스 이용약관</StButton>
        <StButton>개인정보처리방침</StButton>
        </StButtonSet>

      </StOutButtonSet>
      <StAddress>㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호: 2020-서울마포-2938 / 개인정보보호책임자: 김소연 / 담당자메일주소: whatsup@newneek.co
                <br/>서울특별시 마포구 어울마당로 35, 5층 (04048)
                <br/>근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
      </StAddress>
      <StCopyRight>ⓒ NEWNEEK Co., Ltd. 2018-2020</StCopyRight>     
      </StInFooter>
    </StOutFooter>
  )
}

export default Footer

const StOutFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eae7de;
    border-bottom: 1px solid #051619;
`
const StInFooter = styled.div`
    box-sizing: border-box;
    max-width: 1360px;
    width : 90%;
    margin: 60px auto;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
`

const Stlogo = styled.img`
  width: 200px;
`

const StOutLogo = styled.div`
  width:50%;
  min-width: 600px;
  height: 180px;
  `

const StOutButtonSet = styled.div`
  display: flex;
  justify-content:space-between;
  flex-direction: row;
  width:50%;
  min-width: 600px;
  height: 180px;
`
const StButtonSet = styled.div`  
  width:33%;
  font-size: 14px;
  text-align: right;
  gap: 30px;
  
`

const StButton = styled.div`
margin-bottom:15px;
&:hover {
color: #ff6b00;
}
`
const StAddress = styled.div`
    margin-top:28px;
    width: 100%;
    font-size: 14px;
`
const StCopyRight = styled.div`
    margin: 14px 0px 25px;
    font-size: 12px;

`