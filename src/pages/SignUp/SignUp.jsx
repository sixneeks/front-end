import React from 'react'
import { styled } from 'styled-components'
import logo from "../../img/logo.png";
import Input from '../../components/Input';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

function SignUp() {
  return (
    <StSignUpOutContainer>
      <StSignUpContainer>
        <Stlogo src={logo} alt="로고" />
        <StSigeUpBody>
          <Input type={'text'}  placeholder={"이메일"} />
          <Input type={'password'} placeholder={"비밀번호 (8자 이상)"} />
          <Input type={'password'} placeholder={"비밀번호 확인 (8자 이상)"} />
          <Input type={'text'} placeholder={"닉네임"} />
        </StSigeUpBody>
        <StCheckBoxSet>
            <CheckBox text={"모두 동의합니다"}/>
            <CheckBox text={"만 14세 이상 가입 동의 (필수)"}/>
            <StTermsSet><CheckBox text={"이용약관 동의 (필수)"}/><StViewTerms>약관 보기</StViewTerms></StTermsSet>
            <StTermsSet><CheckBox text={"개인정보 수집/이용 동의 (필수)"}/><StViewTerms>약관 보기</StViewTerms></StTermsSet>
            <StTermsSet><CheckBox text={"뉴스레터 및 마케팅 정보 수신 동의 (선택)"}/><StViewTerms>약관 보기</StViewTerms></StTermsSet>
          </StCheckBoxSet>
          <Button name={"가입하기"} colorSet={'로그인'}/>
          
      </StSignUpContainer>
    </StSignUpOutContainer>
  )
}

export default SignUp

//value={} onChange={}

const StSignUpOutContainer = styled.div`
  background-color:#eae7de;
  width: 100%;
  min-height: 100vh;
`

const StSignUpContainer = styled.div`
    max-width: 400px;
    margin: 0px auto;
    padding: 7.5% 5% 4rem;
    position: relative;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Stlogo = styled.img`
  width: 226px;
  margin: 0px auto 40px;
  cursor: pointer;
`
const StSigeUpBody = styled.div`
  width: 100%;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  gap:15px;
  font-size: 14px;
`
const StCheckBoxSet = styled.div`
  margin: 20px 0 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
`

const StTermsSet = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StViewTerms =styled.div`
  text-decoration: underline;
  cursor: pointer;
`

